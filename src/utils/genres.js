const getGenres = (obj) => {
	const uniqueGenres = [...new Set(obj.map((item) => item.genre))];
	return uniqueGenres.map((genre) => {
		return {
			title: genre,
			data: obj.filter((item) => item.genre === genre)
		};
	});
};

export const concatenateMediaData = (movies, series) => {
	let allData = {
		series: getGenres(series),
		movies: getGenres(movies)
	};
	return allData;
};
