//TODO: 全局数据： query：关键词，左侧所有filter
// list处获取query（redux），page（用location获取）为依赖进行请求
// MIXIN: favorite 发送请求，await，变色，返回收藏夹，更新收藏夹（redux），通知收藏成功
import React from 'react'
import PropTypes from 'prop-types'
import PetList from '../Components/PetList'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import PetsHeader from '../Components/PetsHeader'
import Pagination from '../Components/Common/Pagination'
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
function Adoption(props) {
  return (
    <Container>
      <Sidebar />
      <ListContainer>
        <PetsHeader />
        <PetList />
        <Pagination/>
      </ListContainer>
    </Container>
  )
}

Adoption.propTypes = {}

export default Adoption
