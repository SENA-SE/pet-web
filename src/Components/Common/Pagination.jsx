import * as React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
  
  ul {
    justify-content: ${({ right }) => right && "flex-end" || "inherit"};

    & .MuiPaginationItem-root{
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
function Content({ right, path = "adoption", pages = 10, ...rest }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const category = parseInt(query.get('category') || '1', 10);
  const search = query.get('search')

  return (
    <StyledPagination
      page={page}
      count={pages}
      right={right.toString()}
      {...rest}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${path}?${search ? `search=${search}&` : ""}category=${category}${item.page === 1 ? '' : `&page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default function PaginationLink({ right, ...rest }) {
  return (
    <Routes>
      <Route path="*" element={<Content right={right} {...rest} />} />
    </Routes>

  );
}
