var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7360672695702863,
        "pitch": -0.0035031081245371354,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 0.3926792610190226,
          "pitch": 0.09335114853936766,
          "rotation": 12.566370614359176,
          "target": "1-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.23360560757462778,
        "pitch": 0.1138510140473592,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 2.726645292353764,
          "pitch": 0.1320237036668246,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
