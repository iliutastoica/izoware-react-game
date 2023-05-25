export const DIFFICULTY = {
  /**
   * Player
   */

  PLAYER_SPEED: 150, // Default player speed
  PLAYER_SPEED_GROWTH: 0.5, // Player speed growth by level
  PLAYER_HEALTH: 200, // Default player health
  PLAYER_HEALTH_GROWTH: 2, // Player health growth by level
  PLAYER_START_RESOURCES: 990, // Player start resources
  PLAYER_EXPERIENCE_TO_NEXT_LEVEL: 200, // Need experience count to next level
  PLAYER_EXPERIENCE_TO_NEXT_LEVEL_GROWTH: 0.3, // Experience count growth by level

  /**
   * Assistant
   */

  ASSISTANT_SPEED: 150, // Default assistant speed
  ASSISTANT_SPEED_GROWTH: 0.5, // Assistant speed growth by player level
  ASSISTANT_HEALTH: 450, // Default assistant health
  ASSISTANT_HEALTH_GROWTH: 2, // Assistant health growth by player level
  ASSISTANT_ATTACK_DAMAGE: 50, // Default assistant damage
  ASSISTANT_ATTACK_DAMAGE_GROWTH: 20, // Assistant damage growth by player level
  ASSISTANT_ATTACK_SPEED: 5000, // Assistant attack speed
  ASSISTANT_ATTACK_SPEED_GROWTH: 10, // Attack speed growth by player level
  ASSISTANT_ATTACK_DISTANCE: 700, // Assistant maximum attack distance
  ASSISTANT_ATTACK_DISTANCE_GROWTH: 30, // Attack distance growth by player level
  ASSISTANT_ATTACK_PAUSE: 10, // Assistant attack pause
  ASSISTANT_ATTACK_PAUSE_GROWTH: 0, // Attack pause growth by player level

  /**
   * Wave
   */

  WAVE_PAUSE: 200000, // Pause in milliseconds between waves
  WAVE_PAUSE_GROWTH: 0.12, // Pause growth by wave number
  WAVE_SEASON_LENGTH: 5, // Count of wave numbers in season
  WAVE_ENEMIES_COUNT: 5, // Enemies count on first wave
  WAVE_ENEMIES_COUNT_GROWTH: 0.5, // Enemies count growth by wave number
  WAVE_ENEMIES_SPAWN_PAUSE: 2300, // Default pause in milliseconds between enemies spawn
  WAVE_ENEMIES_SPAWN_PAUSE_GROWTH: -0.03, // Enemies spawn pause growth by wave number
  WAVE_EXPERIENCE: 200, // Gained experience per complete wave
  WAVE_EXPERIENCE_GROWTH: 0.1, // Experience count growth by wave number

  /**
   * Chests
   */

  CHEST_SPAWN_FACTOR: 15, // Chest spawn factor
  CHEST_EXPERIENCE: 8, // Gained experience per open chest
  CHEST_EXPERIENCE_GROWTH: 0.3, // Experience growth by wave number
  CHEST_RESOURCES: 40, // Default resources count in chest
  CHEST_RESOURCES_GROWTH: 20, // Resources count growth by wave number

  /**
   * Enemies
   */

  ENEMY_HEALTH: 100, // Enemy default health
  ENEMY_HEALTH_GROWTH: 0.1, // Enemy health growth by wave number
  ENEMY_SPEED: 80, // Enemy default speed
  ENEMY_SPEED_GROWTH: 0.015, // Enemy speed growth by wave number
  ENEMY_DAMAGE: 10, // Enemy default damage
  ENEMY_DAMAGE_GROWTH: 0.01, // Enemy damage growth by wave number
  ENEMY_KILL_EXPERIENCE: 10, // Gained experience per kill enemy
  ENEMY_KILL_EXPERIENCE_GROWTH: 0.07, // Experience growth by wave number

  /**
   * Buildings
   */

  BUILDING_ACTION_RADIUS_GROWTH: 20, // Actions radius growth by upgrade
  BUILDING_ACTION_PAUSE_GROWTH: -0.1, // Actions pause growth by upgrade
  BUILDING_BUILD_EXPERIENCE: 50, // Gained experience for build
  BUILDING_UPGRADE_EXPERIENCE: 40, // Gained experience per upgrade building (N * upgrade_level)
  BUILDING_BUILD_AREA: 180, // Default radius of build area
  BUILDING_BUILD_AREA_GROWTH: 0.05, // Radius growth by level

  /**
   * Building: Wall
   */

  BUILDING_WALL_COST: 1, // Wall cost
  BUILDING_WALL_HEALTH: 15000, // Wall default health
  BUILDING_WALL_HEALTH_UPGRADE: 20000, // Amount of health added per upgrade (N * upgrade_level)

  /**
   * Building: Towers
   */

  BUIDLING_TOWER_SHOT_DAMAGE_GROWTH: 60, // Shot damage growth by upgrade
  BUIDLING_TOWER_SHOT_FREEZE_GROWTH: 0.5, // Frozen duration growth by upgrade
  BUIDLING_TOWER_SHOT_SPEED_GROWTH: 0.3, // Shot speed growth by upgrade
  BUIDLING_TOWER_AMMO_AMOUNT: 990, // Ammo in clip (N * upgrade_level)

  /**
   * Building: Tower: Fire
   */

  BUILDING_TOWER_FIRE_COST: 10, // Tower fire cost
  BUILDING_TOWER_FIRE_HEALTH: 6000, // Default tower fire health
  BUILDING_TOWER_FIRE_ATTACK_RADIUS: 290, // Tower fire attack radius
  BUILDING_TOWER_FIRE_ATTACK_PAUSE: 14, // Tower fire pause between attacks
  BUILDING_TOWER_FIRE_ATTACK_DAMAGE: 350, // Tower fire attack damage
  BUILDING_TOWER_FIRE_ATTACK_SPEED: 550, // Tower fire attack speed

  /**
   * Building: Tower: Frozen
   */

  BUILDING_TOWER_FROZEN_COST: 10, // Tower frozen cost
  BUILDING_TOWER_FROZEN_HEALTH: 9000, // Default tower frozen health
  BUILDING_TOWER_FROZEN_ALLOW_BY_WAVE: 30, // Minimal wave for allow tower frozen
  BUILDING_TOWER_FROZEN_FREEZE_RADIUS: 1800, // Tower frozen freeze radius
  BUILDING_TOWER_FROZEN_FREEZE_PAUSE: 14, // Tower frozen pause between freezs
  BUILDING_TOWER_FROZEN_FREEZE_DURATION: 9000, // Tower frozen freeze duration
  BUILDING_TOWER_FROZEN_FREEZE_SPEED: 550, // Tower frozen freeze speed

  /**
   * Building: Tower: Lazer
   */

  BUILDING_TOWER_LAZER_COST: 5, // Tower lazer cost
  BUILDING_TOWER_LAZER_HEALTH: 3000, // Default tower lazer health
  BUILDING_TOWER_LAZER_ALLOW_BY_WAVE: 50, // Minimal wave for allow tower lazer
  BUILDING_TOWER_LAZER_ATTACK_RADIUS: 1600, // Tower lazer attack radius
  BUILDING_TOWER_LAZER_ATTACK_PAUSE: 16, // Tower lazer pause between attacks
  BUILDING_TOWER_LAZER_ATTACK_DAMAGE: 650, // Tower lazer attack damage

  /**
   * Building: Generator
   */

  BUILDING_GENERATOR_COST: 3, // Generator cost
  BUILDING_GENERATOR_HEALTH: 4000, // Generator health
  BUILDING_GENERATOR_LIMIT: 400, // Maximum count generators on world (N * wave_season)
  BUILDING_GENERATOR_GENERATE_PAUSE: 13, // Generator pause between resource generations
  BUILDING_GENERATOR_RESOURCES: 15000, // Maximum amount of resources that generator can
  BUILDING_GENERATOR_RESOURCES_UPGRADE: 1000, // Amount of resources added per upgrade (N * upgrade_level)

  /**
   * Building: Ammunition
   */

  BUILDING_AMMUNITION_COST: 3, // Ammunition cost
  BUILDING_AMMUNITION_HEALTH: 3000, // Ammunition health
  BUILDING_AMMUNITION_LIMIT: 400, // Maximum count ammunition on world (N * wave_season)
  BUILDING_AMMUNITION_ALLOW_BY_WAVE: 200, // Minimal wave for allow ammunition
  BUILDING_AMMUNITION_RELOAD_RADIUS: 1500, // Ammunition reload ammo radius
  BUILDING_AMMUNITION_AMMO: 17000, // Maximum amount of ammo
  BUILDING_AMMUNITION_AMMO_UPGRADE: 12000, // Amount of ammo added per upgrade (N * upgrade_level)

  /**
   * Building: Medic
   */

  BUILDING_MEDIC_COST: 10, // Medic cost
  BUILDING_MEDIC_HEALTH: 15000, // Medic health
  BUILDING_MEDIC_LIMIT: 10, // Maximum count medic on world (N * wave_season)
  BUILDING_MEDIC_ALLOW_BY_WAVE: 50, // Minimal wave for allow medic
  BUILDING_MEDIC_HEAL_RADIUS: 1600, // Medic heal radius
  BUILDING_MEDIC_HEAL_PAUSE: 30, // Medic heal pause
  BUILDING_MEDIC_HEAL_AMOUNT: 100, // Default medic heal
  BUILDING_MEDIC_HEAL_AMOUNT_UPGRADE: 1000, // Amount of heal added per upgrade (N * upgrade_level)
};
