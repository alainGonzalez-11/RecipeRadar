import csv
import json
import re
import io


def convert_csv_to_json(csv_file_path, json_file_path):
    # Read CSV file with specified encoding
    with open(csv_file_path, 'r', encoding='utf-8') as csv_file:
        csv_data = csv.DictReader(csv_file)

        # Convert CSV data to JSON format
        json_data = []
        row_count = 0  # Counter for the number of rows processed
        for row in csv_data:
            # Remove consecutive double quotes ("") within a row
            row = {key: value.replace('""', '"') for key, value in row.items()}
            row = {key: value.replace('", "', '","') for key, value in row.items()}
            row = {key: value.replace('\n', '') for key, value in row.items()}
            row = {key: value.replace(' NA', '"NA"') for key, value in row.items()}
            row = {key: value.replace('(NA', '("NA"') for key, value in row.items()}
            print(row)
            # Convert fields with 'c("xxxx", "yyy", "zzzz")' format to arrays
            for key in row.keys():
                if re.match(r'^c\(".*"\)$', row[key]):
                    # Extract items within parentheses
                    items_str = re.search(r'(?<=\().*(?=\))', row[key]).group()

                    # Use csv module to parse the items
                    items_file = io.StringIO(items_str)
                    csv_reader = csv.reader(items_file, quotechar='"', skipinitialspace=True)
                    items = next(csv_reader)

                    row[key] = items
                elif row[key].startswith('"') and row[key].endswith('"'):
                    # Convert field surrounded by double quotes to a vector with a single element
                    row[key] = [row[key][1:-1]]
            json_data.append(row)

            row_count += 1
            if row_count == 10000:
                break

        # Write JSON data to file
        with open(json_file_path, 'w') as json_file:
            json.dump(json_data, json_file, indent=4)

    print(f"CSV file '{csv_file_path}' converted to JSON file '{json_file_path}' with a limit of 100 rows.")


# Provide the paths to your CSV and JSON files
csv_file_path = 'recipes.csv'
json_file_path = 'output.json'

# Call the conversion function
convert_csv_to_json(csv_file_path, json_file_path)
