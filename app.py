from flask import Flask, request, jsonify

app = Flask(__name__)

# All-in-one HTML, CSS, JS — named "Nova Shop"
HTML_PAGE = """
<!DOCTYPE html>
<html>
<head>
    <title>Nova Shop</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f0f0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .product {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #response {
            margin-top: 15px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>🛍️ Welcome to Nova Shop</h1>
    <div class="product">
        <h3>Product: Smartwatch</h3>
        <p>Price: $120</p>
        <button onclick="buyProduct()">Buy Now</button>
        <div id="response"></div>
    </div>

    <script>
        function buyProduct() {
            fetch('/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ product: 'Smartwatch', price: 120 })
            })
            .then(res => res.json())
            .then(data => {
                document.getElementById("response").innerText = data.message;
            })
            .catch(err => {
                document.getElementById("response").innerText = "⚠️ Error processing purchase.";
            });
        }
    </script>
</body>
</html>
"""

@app.route('/')
def index():
    return HTML_PAGE

@app.route('/buy', methods=['POST'])
def buy():
    data = request.get_json()
    product = data.get('product')
    price = data.get('price')

    # Simulate backend logic
    message = f"✅ Thank you for shopping at Nova Shop! You bought a {product} for ${price}."
    return jsonify({"message": message})

if __name__ == '__main__':
    app.run(debug=True)

    from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)