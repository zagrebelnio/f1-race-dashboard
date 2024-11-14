SELECT
    scs.position_text AS position,
    c.name AS team_name,
    c.color AS team_color,
	  c.logo AS team_logo,
    scs.points AS points
FROM 
    season_constructor_standing scs
JOIN 
    constructor c ON scs.constructor_id = c.id
WHERE 
    scs.year = $1
ORDER BY 
    scs.position_display_order;