SELECT
	d.first_name,
	d.last_name,
	r.round,
	gp.abbreviation,
	rds.points
FROM race_driver_standing rds
JOIN race r ON r.id = rds.race_id
JOIN grand_prix gp ON gp.id = r.grand_prix_id
JOIN driver d ON d.id = rds.driver_id
WHERE r.year = $1
ORDER BY r.round