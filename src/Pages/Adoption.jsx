//TODO: 全局数据： query：关键词，左侧所有filter
// list处获取query（redux），page（用location获取）为依赖进行请求
// MIXIN: favorite 发送请求，await，变色，返回收藏夹，更新收藏夹（redux），通知收藏成功
import React, { useEffect, useState } from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import PetList from '../Components/PetList'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import PetsHeader from '../Components/FilterHeader'
import PaginationLink from '../Components/Common/Pagination'
import { publicRequest } from '../requestMethods';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10vh;
`
const ListContainer = styled.div`
  width: 100%;
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
function Adoption() {
  const [pets, setPets] = useState([]);
  const [pages, setPages] = useState([]);
  const [sort, setSort] = useState('Tasc');
  const [defaultArr, setDefaultArr] = useState([])
  const [filters, setFilters] = useState({})
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const category = parseInt(query.get('category') || '1', 10);
  const search = query.get('search');

  useEffect(() => {
    const query = {
      deleted: "0",
      categoriesId: category,
      keyword: search || "",
      page: 1,
      pagesize: 10
    }
    const all = {
      deleted: "0",
      page: 1,
      pagesize: 1000
    }
    const getPets = async () => {
      try {
        const res = await publicRequest.post(`/adopt/findAdopt`, query)
        const getAll = await publicRequest.post(`/adopt/findAdopt`, query)
        console.log(res.data.data)
        setPets(res.data.data)
        setDefaultArr(res.data.data)
        setPages(Math.ceil(getAll.data.data.length / 10))
      } catch (e) {
        console.log(e)
      }
    };
    getPets();
  }, [category, page, search]);

  useEffect(() => {
    console.log(sort)
    if (pets) {
      if (sort === 'Sasc') {
        setPets((prev) => {
          const newArr = [...prev].sort((a, b) => parseInt(a.size) - parseInt(b.size))
          return newArr
        }
        );
        // console.log([...filteredProducts].sort((a, b) => a.createdAt - b.createdAt));
      } else if (sort === 'Sdsc') {
        setPets((prev) => {
          const newArr = [...prev].sort((a, b) => parseInt(b.size) - parseInt(a.size))
          return newArr
        }
        );
        // console.log([...filteredProducts].sort((a, b) => a.createdAt - b.createdAt));
      } else if (sort === 'Tasc') {
        setPets(() => {
          return defaultArr
        }
        );
      } else if (sort === 'Tdsc') {
        setPets(() => {
          const newArr = [...defaultArr].reverse()
          return newArr
        }
        );
      } else if (sort === 'gender') {
        setPets((prev) => {
          const newArr = [...prev].sort((a, b) => parseInt(b.sex.length) - parseInt(a.sex.length))
          return newArr
        }
        );
      }
    }
    //  else if (sort === 'Pasc') {
    //     setFilteredProducts((prev) =>
    //         [...prev].sort((a, b) => a.price - b.price)
    //     );
    //     // console.log([...filteredProducts].sort((a, b) => a.price - b.price));
    // } 
    //else if (sort === 'Pdesc') {
    //     setFilteredProducts((prev) =>
    //         [...prev].sort((a, b) => b.price - a.price)
    //     );
    //     // console.log([...filteredProducts].sort((a, b) => b.price - a.price));
    // }
  }, [sort])
  return (
    <Container>
      <Sidebar setValue={setFilters} />
      <ListContainer>
        <PetsHeader setSort={setSort} filter />
        <PetList data={pets} />
        <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} pages={pages} />
      </ListContainer>
    </Container>
  )
}

Adoption.propTypes = {}

export default Adoption
