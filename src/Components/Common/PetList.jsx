import React from 'react'
import PetCard from './PetCard'
import {useState} from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: grid;
    width: 100%;
    padding: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`
const data = [
    {
        name: "名字",
        isCollected: true,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
    {
        name: "名字",
        isCollected: false,
        species: "萨摩耶",
        age: "3个月",
        gender: "male",
        location:"福州"
    },
]
function PetList({category, filters, sort}) {
        // console.log(category,filters,sort);
        const [pets, setPets] = useState([]);
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
        <Container>
                        {/* {category ? filteredProducts.map(item => (
                <Product item={item} key={item.id}/>
            )) : products.slice(0, 10).map(item => (
                <Product item={item} key={item.id}/>
                ))} */}
            {data.map(item=>
                <PetCard data={item}/>
            )}
        </Container>
    )
}

export default PetList
