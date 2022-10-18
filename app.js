function ProductCategoryRow(_ref) {
    var category = _ref.category;

    return React.createElement(
        "tr",
        null,
        React.createElement(
            "th",
            { colSpan: "2" },
            category
        )
    );
}

function ProductRow(_ref2) {
    var product = _ref2.product;

    var name = product.stocked ? product.name : React.createElement(
        "span",
        { style: { color: "red" } },
        product.name
    );

    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            name
        ),
        React.createElement(
            "td",
            null,
            product.price
        )
    );
}

function ProductTable(_ref3) {
    var products = _ref3.products;

    var rows = [];
    var lastCategory = null;

    products.forEach(function (product) {
        if (product.category !== lastCategory) {
            rows.push(React.createElement(ProductCategoryRow, {
                category: product.category,
                key: product.category
            }));
        }

        rows.push(React.createElement(ProductRow, {
            product: product,
            key: product.name
        }));
        lastCategory = product.category;
    });

    return React.createElement(
        "table",
        null,
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Name"
                ),
                React.createElement(
                    "th",
                    null,
                    "Price"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            rows
        )
    );
}
function SearchBar() {
    return React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text", placeholder: "Search..." }),
        React.createElement(
            "label",
            null,
            React.createElement("input", { type: "checkbox" }),
            " ",
            "Only show products in stock"
        )
    );
}

function FilterableProductTable(_ref4) {
    var products = _ref4.products;

    return React.createElement(
        "div",
        null,
        React.createElement(SearchBar, null),
        React.createElement(ProductTable, { products: products })
    );
}

var products = [{ category: "Fruits", price: "$1", stocked: true, name: "Apple" }, { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }];

export default function App() {
    return React.createElement(FilterableProductTable, { products: products });
}

// connection to HTML
var rootNode = document.getElementById('reactRootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));