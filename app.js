// component Category Row
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

var products = [{ category: "Fruits", price: "$1", stocked: true, name: "Apple" }, { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }];

function App() {
    return React.createElement("div", { className: "app" });
}

var rootNode = document.getElementById('reactRootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));