SELECT 
	d.id,
	d.name,
	d.abbreviation,
	d.permanent_number,
	d.date_of_birth,
	d.date_of_death,
	c.alpha2_code,
	c.name AS country_name,
	d.best_championship_position,
	d.best_starting_grid_position,
	d.best_race_result,
	d.total_championship_wins,
	d.total_race_entries,
	d.total_race_starts,
	d.total_race_wins,
	d.total_race_laps,
	d.total_podiums,
	d.total_points,
	d.total_pole_positions,
	d.total_fastest_laps,
	d.total_driver_of_the_day,
	d.total_grand_slams
FROM driver d
JOIN country c ON c.id = d.nationality_country_id
WHERE d.id = $1