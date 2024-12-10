SELECT 
	rd.position_display_order AS position,
	d.first_name,
	d.last_name,
	c.name AS team_name,
	c.color AS team_color,
	rd.race_laps,
	CASE 
        WHEN rd.position_display_order = 1 THEN rd.race_time
        ELSE 
			CASE WHEN rd.race_gap IS NULL THEN rd.position_text
			ELSE rd.race_gap
			END
    END AS race_time,
	rd.race_fastest_lap,
	rd.race_points
FROM race_data rd
JOIN race r ON r.id = rd.race_id
JOIN driver d ON d.id = rd.driver_id
JOIN constructor c ON c.id = rd.constructor_id
WHERE r.year = $1 AND r.round = $2 AND rd.type = 'RACE_RESULT'
ORDER BY rd.position_display_order ASC;