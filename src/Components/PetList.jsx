import React from 'react'
import PetCard from './Common/PetCard'
import { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: grid;
    width: 100%;
    padding: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`

function PetList({ data=[], category, filters, sort, ...rest }) {
    const [filteredPets, setFilteredPets] = useState([]);


    //The function is invoked every time the category changes
    // useEffect(() => {
    //     const getPets = async () => {
    //         try {
    //             const res = await axios.get(category ? `http://localhost:5000/api/products/findList?category=${category}` : `http://localhost:5000/api/products/findList`);
    //             // console.log(res);
    //             setPes(res.data.productList);
    //         } catch (e) {

    //         }
    //     };
    //     getPets();
    // }, [category]);
    // useEffect(() => {
    //     // console.log(Object.entries(filters));
    //     category && setFilteredPets(
    //         pets.filter(item => Object.entries(filters).every(([key, value]) =>
    //             item[key].includes(value)
    //         ))
    //     );
    // }, [category, filters, pets]);
    // useEffect(() => {
    //     if (sort === 'newest') {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => a.createdAt - b.createdAt)
    //         );
    //         // console.log([...filteredProducts].sort((a, b) => a.createdAt - b.createdAt));
    //     } else if (sort === 'Pasc') {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => a.price - b.price)
    //         );
    //         // console.log([...filteredProducts].sort((a, b) => a.price - b.price));
    //     } else if (sort === 'Pdesc') {
    //         setFilteredProducts((prev) =>
    //             [...prev].sort((a, b) => b.price - a.price)
    //         );
    //         // console.log([...filteredProducts].sort((a, b) => b.price - a.price));
    //     }
    // }, [sort]);
    return (
        <Container {...rest}>
            {/* {category ? filteredProducts.map(item => (
                <Product item={item} key={item.id}/>
            )) : products.slice(0, 10).map(item => (
                <Product item={item} key={item.id}/>
                ))} */}
            {data.map(item =>
                <PetCard data={item} key={item.id} />
            )}
        </Container>
    )
}

export default PetList
