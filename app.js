var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function FilterableProductTable(_ref) {
    var products = _ref.products;

    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        filterSearchText = _React$useState2[0],
        setfilterSearchText = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        inStock = _React$useState4[0],
        setInStock = _React$useState4[1];

    return React.createElement(
        "div",
        { className: "whole_table" },
        React.createElement(SearchBar, {
            filterSearchText: filterSearchText,
            inStock: inStock,
            setFilterTextChange: setfilterSearchText,
            setInStockchange: setInStock
        }),
        React.createElement(ProductTable, {
            products: products,
            filterSearchText: filterSearchText,
            inStock: inStock
        })
    );
}

function SearchBar(_ref2) {
    var filterSearchText = _ref2.filterSearchText,
        inStock = _ref2.inStock,
        setFilterTextChange = _ref2.setFilterTextChange,
        setInStockchange = _ref2.setInStockchange;

    return React.createElement(
        "form",
        null,
        React.createElement("input", {
            type: "text",
            value: filterSearchText,
            onChange: function onChange(e) {
                return setFilterTextChange(e.target.value);
            },
            placeholder: "Search..."
        }),
        React.createElement(
            "label",
            null,
            React.createElement("input", {
                type: "checkbox",
                checked: inStock,
                onChange: function onChange(e) {
                    return setInStockchange(e.target.checked);
                }
            }),
            " ",
            "Only show products in stock"
        )
    );
}

function ProductTable(_ref3) {
    var products = _ref3.products,
        filterSearchText = _ref3.filterSearchText,
        inStock = _ref3.inStock;

    var rows = [];
    var lastCategory = null;

    products.forEach(function (product) {
        if (product.name.toLowerCase().indexOf(filterSearchText.toLowerCase()) === -1) {
            return;
        }

        if (inStock && !product.stocked) {
            return;
        }

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

function ProductCategoryRow(_ref4) {
    var category = _ref4.category;

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

function ProductRow(_ref5) {
    var product = _ref5.product;

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

var myProducts = [{ category: "Fruits", price: "$1", stocked: true, name: "Apple" }, { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }];

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(FilterableProductTable, { products: myProducts })
    );
}

// connection to HTML
var rootNode = document.getElementById('reactRootNode');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself)
// state lets your users change your UI
// points to guide you thro when a component doesn't need to use state
// Does it remain unchanged over time ? If so, it isn’t state.
// Is it passed in from a parent via props ? If so, it isn’t state.
// Can you compute it based on existing state or props in your component ? If so, it definitely isn’t state!

// PROPS vs STATE
// Props are like arguments you pass to a function
// they let a parent component pass data to a child component and customize its appearance
// State is like a component’s memory
//  It lets a component keep track of some information and change it in response to interactions
// Props and state are different, but they work together
// A parent component will often keep some information in state (so that it can change it)
// ...and pass it down to child components as their props

//  React uses a one-way data flow
// ...passing data down the component hierarchy from parent to child component
// Often, you can put state directly into state-using components' common parent
// You can also put state into some component above their common parent
// for components that don't make sense to own state, create a new component solely for holding the state 
// ...and add it somewhere in the hierarchy above the common parent component

// Hooks let you “hook into” a component’s render cycle