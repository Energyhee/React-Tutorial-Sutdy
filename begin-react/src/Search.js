import { useState } from 'react';
import './Search.css';

const PRODUCTDATA = [
    {category: 'Fruits', price: '1$', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '1$', stocked: true, name: 'Grape'},
    {category: 'Fruits', price: '2$', stocked: false, name: 'Peach'},
    {category: 'Vege', price: '2$', stocked: false, name: 'Spinach'},
    {category: 'Vege', price: '4$', stocked: false, name: 'Pumpkin'},
    {category: 'Vege', price: '1$', stocked: true, name: 'Peas'}
];

function ProductCateRowTit({product}){
    const head = Object.keys(product); 
    return (
        <>
            <h3 className="sub-tit small">{product.category}</h3>
            <div className='row flex head'>
                <div className='col tit'>{head[3]}</div>
                <div className='col cont'>{head[0]}</div>
                <div className='col cont'>{head[1]}</div>
            </div>
        </>
    );
}

function ProductRow({product}){
    return (
        <div className={'row flex' + (!product.stocked ? ' line' : '')}>
            <div className={'col tit' + (!product.stocked ? ' empty' : '')}>{product.name}</div>
            <div className={'col cont' + (!product.stocked ? ' empty' : '')}>{product.category}</div>
            <div className={'col cont' + (!product.stocked ? ' empty' : '')}>{product.price}</div>
        </div>
    );
}

function ProductList({
    products,
    filterText,
    inStockOnly
}){
    const rows = [];
    let lastCate = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if(product.category !== lastCate){
            rows.push(
                <ProductCateRowTit
                    product={product}
                    key={product.category}
                />
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        )
        lastCate = product.category;
    });

    return (
        <div className='product-list'>
            {rows}
        </div>
    )
}

function FilterProductList({products}){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductList 
                products={products} 
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </>
    )
}

function SearchBar({
    filterText, 
    inStockOnly, 
    onFilterTextChange, 
    onInStockOnlyChange
}){
    return (
        <form className='search-form'>
            <input 
                type='text' 
                placeholder='Search' 
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
                style={{border: '1px solid #ccc', borderRadius: '4px', padding: '4px'}}
            />
            <label style={{display : 'block'}}>
                <input 
                    type='checkbox'
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                Only show products in stock
            </label>
        </form>
    )
}

export default function Search() {
    return (
        <div className='wrapper'>
            <h2 className="sub-tit">Search</h2> 
            <FilterProductList products={PRODUCTDATA} />
        </div>
    )
}