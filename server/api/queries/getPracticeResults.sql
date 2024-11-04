SELECT 
	rd.type,
	rd.position_display_order AS position,
	d.first_name,
	d.last_name,
	c.name AS team_name,
	c.color AS team_color,
	rd.practice_time AS time,
	rd.practice_gap AS gap,
	rd.practice_laps AS laps
FROM race_data rd
JOIN race r ON r.id = rd.race_id
JOIN driver d ON d.id = rd.driver_id
JOIN constructor c ON c.id = rd.constructor_id
WHERE r.year = $1 AND r.round = $2 AND rd.type = $3