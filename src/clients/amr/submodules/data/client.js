export const brands = Object.freeze(
{ 
    'Sunscape': 1,
    'Now': 2,
    'Secrets': 3,
    'Dreams': 4,
    'Zoetry': 5,
    'Breathless': 6,
    'Reflect': 80,
    'Amigo': 97, 
    'AMResorts Europe': 125,
    'Impression': 178
})

export const brandIdToStyleId = Object.freeze(
{
    1: 17437, //Sunscape id_brand=1 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=20967
    2: 17494, //Now id_brand=2 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=10345
    3: 17409, //Secrets id_brand=3 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=13202
    4: 17493, //Dreams id_brand=4 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=21074
    5: 17495, //Zoetry id_brand=5 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=10563
    6: 17491, //Breathless id_brand=6 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=13736
})

export const brandStyleIdArr = 
[
    17437, //Sunscape id_brand=1 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=20967
    17494, //Now id_brand=2 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=10345
    17409, //Secrets id_brand=3 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=13202
    17493, //Dreams id_brand=4 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=21074
    17495, //Zoetry id_brand=5 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=10563
    17491, //Breathless id_brand=6 https://extranet.verticalbooking.com/premium_interface_setup.htm?id_albergo=13736
]

export const brandPropIdArr = 
[
    //breathless 
    13736, //Breathless Cabo San Lucas      
    14102, //Breathless Montego Bay 
    11678, //Breathless Punta Cana Resort & Spa
    13918, //Breathless Riviera Cancun Resort & Spa
    23836, //Breathless Cancun Soul Resort & Spa
    //dreams 
    10577, //Dreams Riviera Cancun Resort & Spa
    10578, //Dreams Puerto Aventuras
    10579, //Dreams Tulum
    10581, //Dreams Punta Cana
    10582, //Dreams Palm Beach
    10583, //Dreams Huatulco
    10584, //Dreams Los Cabos Golf Resort & Spa
    10586, //Dreams Villamagna
    12069, //Dreams Sands Cancun
    12346, //Dreams Las Mareas Costa Rica
    14097, //Dreams Playa Bonita Panama
    14099, //Dreams Playa Mujeres Golf & Spa Resort
    14100, //Dreams Acapulco Resort & Spa             
    14101, //Dreams Dominicus La Romana
    19903, //Dreams Natura
    20971, //Dreams Curacao Resort Spa and Casino
    21074, //Dreams Macao Beach Punta Cana Resort and Spa
    18179, //Dreams Riviera Cancun Resort & Spa
    10344, //Dreams Royal Beach
    23936, //Dreams Sapphire Riviera Cancun
    10345, //Dreams Sapphire Riviera Cancun
    23142, //Dreams Bahia Mita
    24244, //Dreams Cozumel Cape Resort and Spa
    24762, //Dreams Karibana Cartagena    
    //now 
    10342, //Now Amber Puerto Vallarta
    20968, //Now Emerald Cancun
    10343, //Now Jade Riviera Cancun
    11353, //Now Onyx Punta Cana
    10345, //Now Sapphire Riviera Cancun
    //zoetry: 
    10564, //Zoëtry Agua Punta Cana            
    14580, //Zoëtry Montego Bay
    12506, //Zoëtry Villa Rolandi Isla Mujeres
    10563, //Zoëtry Paraiso de la Bonita
    24114, //Casa Del Mar
    24242, //Zoetry Curacao
    23435, //Zoetry Heritage Mallorca
    //secrets 
    13202, //Secrets Akumal
    11094, //Secrets Cozumel
    10566, //Secrets Carpi 
    10570, //Secrets Huatulco
    10568, //Secrets Maroma
    13491, //Secrets Papagayo
    12070, //Secrets Playa Mujers 
    11302, //Secrets Los Cabos
    10569, //Secrets Royal Beach
    10573, //Secrets St James
    10572, //Secrets Wild Orchid
    20640, //Secrets St Martin
    10574, //Secrets The Vine
    10575, //Secrets Vallarta Bay
    14098, //Secrets Cap Cana
    23253, //Secrets Riviera Cancun
    17154, //Secrets Moxché Playa del Carmen
    23143, //Secrets Bahia Mita Surf & Spa
    23931, //Secrets Impression Moxche
    24957, //Secrets Impression Isla Mujeres
    //sunscape 
    20967, //Sunscape Akumel
    10934, //Sunscape Curacao
    10562, //Sunscape Dorado Pacifico Ixtapa
    14311, //Sunscape Puerto Plata
    14161, //Sunscape Puerto Vallarta
    11095, //Sunscape Sabor Cozumel
]



export const propIdToBrandId = Object.freeze(
{
    //breathless 
    6: [
        13736, //Breathless Cabo San Lucas      
        14102, //Breathless Montego Bay 
        11678, //Breathless Punta Cana Resort & Spa
        13918, //Breathless Riviera Cancun Resort & Spa
        23836, //Breathless Cancun Soul Resort & Spa
    ],
    //dreams 
    4: [
        10577, //Dreams Riviera Cancun Resort & Spa
        10578, //Dreams Puerto Aventuras
        10579, //Dreams Tulum
        10581, //Dreams Punta Cana
        10582, //Dreams Palm Beach
        10583, //Dreams Huatulco
        10584, //Dreams Los Cabos Golf Resort & Spa
        10586, //Dreams Villamagna
        12069, //Dreams Sands Cancun
        12346, //Dreams Las Mareas Costa Rica
        14097, //Dreams Playa Bonita Panama
        14099, //Dreams Playa Mujeres Golf & Spa Resort
        14100, //Dreams Acapulco Resort & Spa             
        14101, //Dreams Dominicus La Romana
        19903, //Dreams Natura
        20971, //Dreams Curacao Resort Spa and Casino
        21074, //Dreams Macao Beach Punta Cana Resort and Spa
        18179, //Dreams Riviera Cancun Resort & Spa
        10344, //Dreams Royal Beach
        23936, //Dreams Sapphire Riviera Cancun
        10345, //Dreams Sapphire Riviera Cancun
        23142, //Dreams Bahia Mita
        24244, //Dreams Cozumel Cape Resort and Spa
        24762, //Dreams Karibana Cartagena    
    ],
    //now
    2: [
        10342, //Now Amber Puerto Vallarta
        20968, //Now Emerald Cancun
        10343, //Now Jade Riviera Cancun
        11353, //Now Onyx Punta Cana
        10345, //Now Sapphire Riviera Cancun
    ],
    //zoetry: 
    5: [
        10564, //Zoëtry Agua Punta Cana            
        14580, //Zoëtry Montego Bay
        12506, //Zoëtry Villa Rolandi Isla Mujeres
        10563, //Zoëtry Paraiso de la Bonita
        24114, //Casa Del Mar
        24242, //Zoetry Curacao
        23435, //Zoetry Heritage Mallorca
    ],
    //secrets 
    3: [
        13202, //Secrets Akumal
        11094, //Secrets Cozumel
        10566, //Secrets Carpi 
        10570, //Secrets Huatulco
        10568, //Secrets Maroma
        13491, //Secrets Papagayo
        12070, //Secrets Playa Mujers 
        11302, //Secrets Los Cabos
        10569, //Secrets Royal Beach
        10573, //Secrets St James
        10572, //Secrets Wild Orchid
        20640, //Secrets St Martin
        10574, //Secrets The Vine
        10575, //Secrets Vallarta Bay
        14098, //Secrets Cap Cana
        23253, //Secrets Riviera Cancun
        17154, //Secrets Moxché Playa del Carmen
        23143, //Secrets Bahia Mita Surf & Spa
        23931, //Secrets Impression Moxche
        24957, //Secrets Impression Isla Mujeres
    ],
    //sunscape 
    1: [
        20967, //Sunscape Akumel
        10934, //Sunscape Curacao
        10562, //Sunscape Dorado Pacifico Ixtapa
        14311, //Sunscape Puerto Plata
        14161, //Sunscape Puerto Vallarta
        11095, //Sunscape Sabor Cozumel
    ]
})
