SELECT 
	con.id,
	con.full_name,
	cou.alpha2_code,
	cou.name,
	con.color,
	con.logo,
	con.best_championship_position,
	con.best_starting_grid_position,
	con.best_race_result,
	con.total_championship_wins,
	con.total_race_entries,
	con.total_race_starts,
	con.total_race_wins,
	con.total_1_and_2_finishes,
	con.total_race_laps,
	con.total_podiums,
	con.total_podium_races,
	con.total_points,
	con.total_pole_positions,
	con.total_fastest_laps
FROM constructor con
JOIN country cou ON cou.id = con.country_id
WHERE con.id = $1