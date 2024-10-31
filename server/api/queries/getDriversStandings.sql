WITH driver_standing AS (
    SELECT
        sds.position_display_order AS position,
        d.first_name,
        d.last_name,
        c.name AS team_name,
        c.color AS team_color,
		c.logo AS team_logo,
        co.alpha2_code AS nationality_code,
        sds.points,
        ROW_NUMBER() OVER (PARTITION BY sds.driver_id ORDER BY sds.position_display_order) AS rn
    FROM 
        season_driver_standing sds
    JOIN 
        driver d ON sds.driver_id = d.id
    JOIN 
        season_entrant_driver sed ON sds.year = sed.year AND sds.driver_id = sed.driver_id
    JOIN 
        constructor c ON sed.constructor_id = c.id
    JOIN 
        country co ON d.nationality_country_id = co.id
    WHERE 
        sds.year = $1
)
SELECT
    position,
    first_name,
    last_name,
    team_name,
    team_color,
	team_logo,
    nationality_code,
    points
FROM 
    driver_standing
WHERE 
    rn = 1
ORDER BY 
    position;