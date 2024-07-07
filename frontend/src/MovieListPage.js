 // src/pages/MovieListPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../redux/actions/movieActions';
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MovieListPage = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movieList);
  const { loading, error, movies } = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return (
    <VStack spacing={4} mt={8}>
      <Heading>Available Movies</Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        movies.map((movie) => (
          <Box key={movie._id} p={4} borderWidth={1} borderRadius="lg">
            <Heading size="md">{movie.title}</Heading>
            <Text>Genre: {movie.genre}</Text>
            <Text>Showtimes: {movie.showtimes.join(', ')}</Text>
            <Link to={`/movies/${movie._id}`}>
              <Button colorScheme="teal" mt={4}>
                View Details
              </Button>
            </Link>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default MovieListPage;
