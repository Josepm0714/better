// Starting Items
onEvent("worldgen.remove", event => {
    event.removeOres(ores => {
      ores.blocks = [
       "scalinghealth:heart_crystal_ore",
       "scalinghealth:power_crystal_ore",
       'wyrmroost:platinum_ore',
       'cavesandcliffs:deepslate_iron_ore'

       
       ]
    })})