"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
import pandas as pd
from rxconfig import config

color = "rgb(107,99,246)"

class State(rx.State):
    """The app state."""
    # The images to show.
    img: list[str]
    formatted_data: list[str]
    @rx.event
    async def handle_upload(
        self, files: list[rx.UploadFile]
    ):
        """Handle the upload of file(s).

        Args:
            files: The uploaded files.
        """
        for file in files:
            upload_data = await file.read()
            outfile = rx.get_upload_dir() / file.filename

            # Save the file.
            with outfile.open("wb") as file_object:
                file_object.write(upload_data)

            # Update the img var.
            self.img.append(file.filename)

    @rx.event
    async def generate_file(
        self, files: list[rx.UploadFile]
    ):
        """Generate a formatted Excel file from the uploaded file(s).

        Args:
            files: The uploaded files.
        """
        if files:
            file_path = files[0]  # Assuming you only want to process the first uploaded file
            data = pd.read_excel(await file_path.read(), header=None)  # Load your Excel file without headers

            # Reshape the data: each record is 8 rows, so we reshape accordingly
            records = data.values.reshape(-1, 8)  # Reshape into 8 columns for each record

            # Convert reshaped array into a DataFrame
            df = pd.DataFrame(records, columns=[
                "ID", "Amount", "Code1", "Category", "Subcategory", "Code2", "Description", "Status"
            ])

            # Save the cleaned DataFrame to a new Excel file
            output_path = 'assets/formatted_data.xlsx'
            df.to_excel(output_path, index=False)
            print("Data has been reformatted and saved to", output_path)        
            self.formatted_data.append(output_path)
            CondState.change

    @rx.event
    async def download_file(self):
        return rx.download(
            url="/formatted_data.xlsx",
            filename="formatted_data.xlsx"
                           )
    
class CondState(rx.State):
    show: bool = False

    @rx.event
    def change(self):
        self.show = not (self.show)

def index() -> rx.Component:
    # Define a default color
    color = "blue"  # You can change this to any valid color string

    # Welcome Page (Index)
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("Welcome to Airline Ancillary Data convert!", size="9"),
            rx.upload(
                rx.vstack(
                    rx.button(
                        "Select File",
                        color=color,
                        bg="white",
                        border=f"1px solid {color}",
                    ),
                    rx.text(
                        "Drag and drop files here or click to select files"
                    ),
                ),
                id="upload1",
                border=f"1px dotted {color}",
                padding="5em",
                accept={"application/xlsx":[".xlsx"]},
                max_files=1
            ),
            rx.button(
                "Upload",
                on_click=State.generate_file(
                    rx.upload_files(upload_id="upload1")
                ),
            ),
            rx.button(
                "Download",
                on_click=State.download_file
            ),
            rx.cond(
                CondState.show,
                rx.button(
                "Download",
                on_click=State.download_file
            ),
            )
            ,

            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )

app = rx.App()
app.add_page(index)
