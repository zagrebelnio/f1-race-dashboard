SELECT 
	rd.position_display_order AS position,
	d.first_name,
	d.last_name,
	c.name AS team_name,
	c.color AS team_color,
	rd.qualifying_q1 AS q1,
	rd.qualifying_q2 AS q2,
	rd.qualifying_q3 AS q3,
	rd.qualifying_gap AS gap
FROM race_data rd
JOIN race r ON r.id = rd.race_id
JOIN driver d ON d.id = rd.driver_id
JOIN constructor c ON c.id = rd.constructor_id
WHERE r.year = $1 AND r.round = $2 AND rd.type = 'QUALIFYING_RESULT'