function FilterableProductTable({ products }) {
    const [filterSearchText, setfilterSearchText] = React.useState("");
    const [inStock, setInStock] = React.useState(false);

    return (
        <div className="whole_table">
            <SearchBar
                filterSearchText={filterSearchText}
                inStock={inStock}
                setFilterTextChange={setfilterSearchText}
                setInStockchange={setInStock}
            />

            <ProductTable
                products={products}
                filterSearchText={filterSearchText}
                inStock={inStock}
            />
        </div>
    );
}

function SearchBar({ filterSearchText, inStock, setFilterTextChange, setInStockchange }) {
    return (
        <form>
            <input
                type="text"
                value={filterSearchText}
                onChange={(e) => setFilterTextChange(e.target.value)}
                placeholder="Search..."
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStockchange(e.target.checked)}
                />
                {" "}
                Only show products in stock
            </label>
        </form>
    );
}

function ProductTable({ products, filterSearchText, inStock }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterSearchText.toLowerCase()) === -1) {
            return;
        }

        if (inStock && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: "red" }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

const myProducts = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
    return (
        <div className="app">
            <FilterableProductTable products={myProducts} />
        </div>
    );
}


// connection to HTML
const rootNode = document.getElementById('reactRootNode');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);


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