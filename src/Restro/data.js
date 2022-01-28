import React from "react";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
    const dataRestro = [
    {
        "type": "restaurant",
        "info": {
            "resId": 101066,
            "name": "Shree Mathurawala Sweets",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/101066/8419a7cb36d28180a9d4bc4b76889a70_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/101066/8419a7cb36d28180a9d4bc4b76889a70_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/101066/8c56017ab5958aaff79279120f0e2b36_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "930",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.4",
                        "reviewCount": "35",
                        "reviewTextSmall": "35 Reviews",
                        "subtext": "35 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "895",
                        "reviewTextSmall": "895 Reviews",
                        "subtext": "895 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Khatipura Road, Jaipur",
                "address": "Khatipura Mod, Khatipura Road, Jaipur",
                "localityUrl": "jaipur/khatipura-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/shree-mathurawala-sweets-khatipura-road/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"101066\",\"element_type\":\"listing\",\"rank\":202}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [
            {
                "type": "chain_cta",
                "text": "View all outlets",
                "clickUrl": "/jaipur/restaurants/shree-mathurawala-sweets?subzone=10310&category=2"
            }
        ],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19638587,
            "name": "Momo Magic Cafe",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19638587/8db775f284f9435b0d82522c31fa688d_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/19638587/8db775f284f9435b0d82522c31fa688d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19638587/af34521e9565abcd7f4dd7be6ab4a153_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "41",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.4",
                        "reviewCount": "9",
                        "reviewTextSmall": "9 Reviews",
                        "subtext": "9 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "32",
                        "reviewTextSmall": "32 Reviews",
                        "subtext": "32 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Chitrakoot, Jaipur",
                "address": "Shop 3, 6/17, Near Jai Shree Periwal School, Chitrakoot, Jaipur",
                "localityUrl": "jaipur/chitrakoot-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/momos/",
                    "name": "Momos"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/momo-magic-cafe-chitrakoot/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19638587\",\"element_type\":\"listing\",\"rank\":203}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18865883,
            "name": "Arham",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18865883/034d5230d333f77658a1da8bcfcf7a22_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/18865883/034d5230d333f77658a1da8bcfcf7a22_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18865883/35ba723ed6ba92c267547501f9d8bab0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,330",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "225",
                        "reviewTextSmall": "225 Reviews",
                        "subtext": "225 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "4,105",
                        "reviewTextSmall": "4,105 Reviews",
                        "subtext": "4,105 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Chitrakoot, Jaipur",
                "address": "145, Nirman Nagar, DCM, Near Elements Mall, Chitrakoot, Jaipur",
                "localityUrl": "jaipur/chitrakoot-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹500 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/arham-chitrakoot/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18865883\",\"element_type\":\"listing\",\"rank\":204}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 101251,
            "name": "Handi Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/4/100124/902615347df651888b2f66958d3a75ec_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/4/100124/902615347df651888b2f66958d3a75ec_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/4/100124/ac8f02f120d9adc914f055355e832ab9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "2,785",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "562",
                        "reviewTextSmall": "562 Reviews",
                        "subtext": "562 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "2,223",
                        "reviewTextSmall": "2,223 Reviews",
                        "subtext": "2,223 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,300 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Khatipura Road, Jaipur",
                "address": "Plot 362, Nemi Sagar Colony, Khatipura Road, Jaipur",
                "localityUrl": "jaipur/khatipura-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/bar-food/",
                    "name": "Bar Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/bbq/",
                    "name": "BBQ"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,300 for two"
            }
        },
        "order": [],
        "gold": {
            "text": "Pro - Get 15% off"
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/handi-restaurant-khatipura-road/info",
            "clickActionDeeplink": ""
        },
        "distance": "896 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"101251\",\"element_type\":\"listing\",\"rank\":205}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [
            {
                "type": "booking_cta",
                "text": "Book a Table",
                "clickUrl": "/jaipur/handi-restaurant-khatipura-road/book"
            },
            {
                "type": "chain_cta",
                "text": "View all outlets",
                "clickUrl": "/jaipur/restaurants/handi-restaurant?subzone=10310&category=2"
            }
        ],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19682341,
            "name": "Banana Leaf Taste Of South India",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19682341/c353c29961f0f66589ce91358aef8c43_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/19682341/c353c29961f0f66589ce91358aef8c43_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19682341/b0c9723fc71366fce538b7538ab63de5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.0",
                "rating_text": "3.0",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "9",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.0",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "4 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "5",
                        "reviewTextSmall": "5 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "Shop 27, Near SBI Bank, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "Closes in 27 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/banana-leaf-taste-of-south-india-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "677 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19682341\",\"element_type\":\"listing\",\"rank\":206}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19689921,
            "name": "Angel's Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19689921/ca969917ba2588805dd20ef723760f55_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/19689921/ca969917ba2588805dd20ef723760f55_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19689921/fab859f94b19db773ec0737b0e12c360_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.1",
                "rating_text": "3.1",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "9",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.1",
                        "reviewCount": "6",
                        "reviewTextSmall": "6 Reviews",
                        "subtext": "6 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "Shop 57, Sector 8, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹350 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/angels-kitchen-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19689921\",\"element_type\":\"listing\",\"rank\":207}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 101366,
            "name": "Royal Queens Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/101366/a06501488c35c6eb9e6cc8934e4f7496_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/101366/a06501488c35c6eb9e6cc8934e4f7496_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/101366/52eebdfd2c457e6625ceae20db08eec9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.0",
                "rating_text": "3.0",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "26",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.0",
                        "reviewCount": "9",
                        "reviewTextSmall": "9 Reviews",
                        "subtext": "9 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "17",
                        "reviewTextSmall": "17 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "29/30, Rathore Nagar, Queens Road, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹600 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/royal-queens-restaurant-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "829 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"101366\",\"element_type\":\"listing\",\"rank\":208}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18654513,
            "name": "Tea Post",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/102330/71a25dd976928caa13a657c1c1c63190_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/0/102330/71a25dd976928caa13a657c1c1c63190_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18654513/1e303c66bb621c90668c3a82262154cf_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "2.6",
                "rating_text": "2.6",
                "rating_subtitle": "Average",
                "rating_color": "FFBA00",
                "votes": "46",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "2.6",
                        "reviewCount": "46",
                        "reviewTextSmall": "46 Reviews",
                        "subtext": "46 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "2.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "G 6, Ganesham Tower, Near Amrapali Circle, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https://www.zomato.com/jaipur/restaurants/tea/",
                    "name": "Tea"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/coffee/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/tea-post-1-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "241 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18654513\",\"element_type\":\"listing\",\"rank\":209}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [
            {
                "type": "chain_cta",
                "text": "View all outlets",
                "clickUrl": "/jaipur/restaurants/tea-saga?subzone=10310&category=2"
            }
        ],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18825507,
            "name": "Kakus Cafe",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18825507/c11cd0916ac2fd2d2a66e978d9d15b76_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/18825507/c11cd0916ac2fd2d2a66e978d9d15b76_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18825507/61fd9abb7504c0886f2144540d2a4a16_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "340",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "2.9",
                        "reviewCount": "36",
                        "reviewTextSmall": "36 Reviews",
                        "subtext": "36 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "2.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "304",
                        "reviewTextSmall": "304 Reviews",
                        "subtext": "304 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "Shop 30, JDA Central Market, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/kakus-cafe-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "286 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18825507\",\"element_type\":\"listing\",\"rank\":210}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18895503,
            "name": "The Clock 24",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/18895503/8a085947d8332361889835255d00e04e_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/3/18895503/8a085947d8332361889835255d00e04e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18895503/c8cf6254443ef9d1e4e7f0c54589ca70_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "388",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.1",
                        "reviewCount": "32",
                        "reviewTextSmall": "32 Reviews",
                        "subtext": "32 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "356",
                        "reviewTextSmall": "356 Reviews",
                        "subtext": "356 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "C-92, F-2, Sanwariya Residency, Manglam City, Kalwar Road, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/the-clock-24-1-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "7.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18895503\",\"element_type\":\"listing\",\"rank\":211}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19117859,
            "name": "Radha Palace",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19117859/afc111c5fb080a8e4399e256e94d5063_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/9/19117859/afc111c5fb080a8e4399e256e94d5063_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/19117859/998afe4294ec72e1573bfa78a39da987_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "59",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "2.9",
                        "reviewCount": "28",
                        "reviewTextSmall": "28 Reviews",
                        "subtext": "28 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "2.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "31",
                        "reviewTextSmall": "31 Reviews",
                        "subtext": "31 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "Panchsil Colony, Purani Chungi, Ajmer Road, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/radha-palace-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19117859\",\"element_type\":\"listing\",\"rank\":212}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19128822,
            "name": "Annapurna Sweets",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19128822/d5fb6fd12367b4f3a47ae4e49b6137d5_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/19128822/d5fb6fd12367b4f3a47ae4e49b6137d5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19128822/d5fb6fd12367b4f3a47ae4e49b6137d5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.0",
                "rating_text": "3.0",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "5",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.0",
                        "reviewCount": "5",
                        "reviewTextSmall": "5 Reviews",
                        "subtext": "5 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "yellow",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹100 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vaishali Nagar, Jaipur",
                "address": "Shop 15, Khatipura Tiraha, Sirsi Road, Vaishali Nagar, Jaipur",
                "localityUrl": "jaipur/vaishali-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/jaipur/restaurants/mithai/",
                    "name": "Mithai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/jaipur/annapurna-sweets-vaishali-nagar/info",
            "clickActionDeeplink": ""
        },
        "distance": "1.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"08037899-020d-45d2-a7d5-9a14014d68b0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4138162215804993536\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19128822\",\"element_type\":\"listing\",\"rank\":213}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    }
]
};