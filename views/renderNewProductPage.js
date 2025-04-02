module.exports = (data) => {
    if (!data) {
        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>New Product</title>
      </head>
      <body>
        <h1>No products added yet</h1>
      </body>
      </html>
    `;
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>New Product</title>
    </head>
    <body>
      <h1>New Product Added</h1>
      <p>${data}</p>
    </body>
    </html>
  `;
};