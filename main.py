import os
from flask import Flask, render_template, request, redirect, url_for, flash
import PIL
import PIL.Image as img__

app = Flask("Different Brushes Test")

@app.route("/")
def index():
    return render_template("index.html")

# The converter will first get the normal image, then grayscale it, then erase all pieces that are entirely white, then convert it to a 1-bit image (black), and then save it as a .cebt file (basically PNG but with a different extension)
@app.route('/converter', methods=['GET', 'POST'])
def converter():
    if request.method == 'POST':
        # Get the image from the form
        image = request.files['image']
        # Create the directory if it doesn't exist
        os.makedirs('static/images', exist_ok=True)
        # Save the image to the server
        image.save('static/images/image.png')
        # Open the image
        image = img__.open('static/images/image.png')
        # Convert the image to grayscale
        image = image.convert('L')
        # Erase all pieces that are entirely white
        image = image.point(lambda p: p * (p < 255))
        # Convert the image to a 1-bit image (black)
        image = image.convert('1')
        # Create the file before proceeding (cause this brought an error already)
        open('static/images/image_.png', 'w')
        # Save the image as a .cebt file (basically PNG but with a different extension)
        image.save('static/images/image_.png')
        # Rename the file so it has the correct extension
        os.rename('static/images/image_.png', 'static/images/image.cebt')
        # Do not redirect, return the image instead
        return render_template('converter.html', image=image)
    else:
        return render_template('converter.html')

@app.route('/main')
def main():
    return render_template('main.html')

app.run('0.0.0.0', 8080, debug=True)