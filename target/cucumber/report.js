$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vehicleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for vehicle with Given Registration Number",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "search and assert vehicle details",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I read all the registration number from the \"regNumbers.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on DVLA search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cregistration\u003e\" number",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the Make \"\u003cmake\u003e\" of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the Colour \"\u003ccolour\u003e\" of the vehicle",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;",
  "rows": [
    {
      "cells": [
        "registration",
        "make",
        "colour"
      ],
      "line": 13,
      "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;1"
    },
    {
      "cells": [
        "EF59 OJN",
        "Nissan",
        "Black"
      ],
      "line": 14,
      "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;2"
    },
    {
      "cells": [
        "FE61 BVX",
        "VAUXHALL",
        "White"
      ],
      "line": 15,
      "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;3"
    },
    {
      "cells": [
        "LN12 SVC",
        "JAGUAR",
        "Black"
      ],
      "line": 16,
      "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;4"
    },
    {
      "cells": [
        "EX15 ZUC",
        "AUDI",
        "White"
      ],
      "line": 17,
      "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 171155,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "search and assert vehicle details",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read all the registration number from the \"regNumbers.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on DVLA search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"EF59 OJN\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the Make \"Nissan\" of the vehicle",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the Colour \"Black\" of the vehicle",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "regNumbers.csv",
      "offset": 45
    }
  ],
  "location": "DvlaEnquiry_sd.i_read_all_the_registration_number_from_the_input_file(String)"
});
formatter.result({
  "duration": 143054165,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 851254597,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_click_on_button()"
});
formatter.result({
  "duration": 1528605389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EF59 OJN",
      "offset": 9
    }
  ],
  "location": "DvlaEnquiry_sd.i_enter_regitration_number(String)"
});
formatter.result({
  "duration": 103497582,
  "status": "passed"
});
formatter.match({
  "location": "DvlaEnquiry_sd.i_click_on_continue_button()"
});
formatter.result({
  "duration": 313953330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 19
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_of_the_vehicle(String)"
});
formatter.result({
  "duration": 42713388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 21
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_Colour_of_the_vehicle(String)"
});
formatter.result({
  "duration": 17954909,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 112400134,
  "status": "passed"
});
formatter.before({
  "duration": 24070,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "search and assert vehicle details",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read all the registration number from the \"regNumbers.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on DVLA search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"FE61 BVX\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the Make \"VAUXHALL\" of the vehicle",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the Colour \"White\" of the vehicle",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "regNumbers.csv",
      "offset": 45
    }
  ],
  "location": "DvlaEnquiry_sd.i_read_all_the_registration_number_from_the_input_file(String)"
});
formatter.result({
  "duration": 461187,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 355561418,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_click_on_button()"
});
formatter.result({
  "duration": 314548338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FE61 BVX",
      "offset": 9
    }
  ],
  "location": "DvlaEnquiry_sd.i_enter_regitration_number(String)"
});
formatter.result({
  "duration": 77875234,
  "status": "passed"
});
formatter.match({
  "location": "DvlaEnquiry_sd.i_click_on_continue_button()"
});
formatter.result({
  "duration": 297487034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VAUXHALL",
      "offset": 19
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_of_the_vehicle(String)"
});
formatter.result({
  "duration": 38785163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 21
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_Colour_of_the_vehicle(String)"
});
formatter.result({
  "duration": 21040050,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 79634891,
  "status": "passed"
});
formatter.before({
  "duration": 22968,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "search and assert vehicle details",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read all the registration number from the \"regNumbers.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on DVLA search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"LN12 SVC\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the Make \"JAGUAR\" of the vehicle",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the Colour \"Black\" of the vehicle",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "regNumbers.csv",
      "offset": 45
    }
  ],
  "location": "DvlaEnquiry_sd.i_read_all_the_registration_number_from_the_input_file(String)"
});
formatter.result({
  "duration": 507995,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 323098758,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_click_on_button()"
});
formatter.result({
  "duration": 315232681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LN12 SVC",
      "offset": 9
    }
  ],
  "location": "DvlaEnquiry_sd.i_enter_regitration_number(String)"
});
formatter.result({
  "duration": 80052293,
  "status": "passed"
});
formatter.match({
  "location": "DvlaEnquiry_sd.i_click_on_continue_button()"
});
formatter.result({
  "duration": 305776983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JAGUAR",
      "offset": 19
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_of_the_vehicle(String)"
});
formatter.result({
  "duration": 16067478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 21
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_Colour_of_the_vehicle(String)"
});
formatter.result({
  "duration": 21142186,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 87416470,
  "status": "passed"
});
formatter.before({
  "duration": 22784,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "search and assert vehicle details",
  "description": "",
  "id": "searching-for-vehicle-with-given-registration-number;search-and-assert-vehicle-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read all the registration number from the \"regNumbers.csv\" file",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on DVLA search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"EX15 ZUC\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the Make \"AUDI\" of the vehicle",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I verify the Colour \"White\" of the vehicle",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "regNumbers.csv",
      "offset": 45
    }
  ],
  "location": "DvlaEnquiry_sd.i_read_all_the_registration_number_from_the_input_file(String)"
});
formatter.result({
  "duration": 493842,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_am_on_DVLA_search_page()"
});
formatter.result({
  "duration": 360280551,
  "status": "passed"
});
formatter.match({
  "location": "DvlaHome_sd.i_click_on_button()"
});
formatter.result({
  "duration": 342021278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EX15 ZUC",
      "offset": 9
    }
  ],
  "location": "DvlaEnquiry_sd.i_enter_regitration_number(String)"
});
formatter.result({
  "duration": 77128539,
  "status": "passed"
});
formatter.match({
  "location": "DvlaEnquiry_sd.i_click_on_continue_button()"
});
formatter.result({
  "duration": 362204465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 19
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_of_the_vehicle(String)"
});
formatter.result({
  "duration": 26556029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 21
    }
  ],
  "location": "DvlaResults_sd.i_verify_the_Colour_of_the_vehicle(String)"
});
formatter.result({
  "duration": 19900723,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 82251324,
  "status": "passed"
});
});