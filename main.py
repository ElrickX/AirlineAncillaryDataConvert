import pandas as pd

# Load the Excel file
file_path = 'Book2.xlsx'  # Replace with your actual file path
data = pd.read_excel(file_path, header=None)  # Load your Excel file without headers
#data = data[:-3]  # Remove the last 3 rows

# Reshape the data: each record is 8 rows, so we reshape accordingly
records = data.values.reshape(-1, 8)  # Reshape into 8 columns for each record

# Convert reshaped array into a DataFrame
df = pd.DataFrame(records, columns=[
    "ID", "Amount", "Code1", "Category", "Subcategory", "Code2", "Description", "Status"
])

# Save the cleaned DataFrame to a new Excel file
output_path = 'formatted_data.xlsx'
df.to_excel(output_path, index=False)

print("Data has been reformatted and saved to", output_path)