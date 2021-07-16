import {Store} from './store';

export const XtremMedia: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#detail > div.article-list-con_stock > a',
      text: ['DISPONIBLE'],
    },
    maxPrice: {
      container: '#detail > div.offerDetails.article-list-pvp',
      euroFormat: true,
    },
    outOfStock: {
      container: '#detail > div.article-list-sin_stock',
      text: ['AGOTADO'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://xtremmedia.com/Talius_Denver_500W_Negra.html',
    },
    // 3090
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url: 'https://xtremmedia.com/Asus_EKWB_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_Gaming_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix oc white',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_OC_White_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3090_White_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3090_Gaming_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'turbo',
      series: '3090',
      url:
        'https://xtremmedia.com/Asus_Turbo_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3090_FTW3_Ultra_Gaming_24GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3090_XC3_Ultra_Gaming_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus box',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_24GB_Gaming_Box.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_Aorus_GeForce_RTX_3090_Master_24GB_DDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3090_Xtreme_WaterForce_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Eagle_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Gaming_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'turbo',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Turbo_24GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3090_Vision_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3090_Gaming_X_Trio_24GB_GDDR6X_1.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3090_VENTUS_3X_OC_24GB_GDDR6X.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3090',
      url:
        'https://xtremmedia.com/Palit_GeForce_RTX_3090_GameRock_24GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3090',
      url:
        'https://xtremmedia.com/PNY_GeForce_RTX_3090_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_24GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3090',
      url:
        'https://xtremmedia.com/PNY_GeForce_RTX_3090_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_24GB_GDDR6X_1.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3090_Trinity_24GB_GDDR6X.html',
    },
    // 3080ti
    {
      brand: 'asus',
      model: 'strix',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080Ti_12GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Ti_OC_12GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3080Ti_12GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3080Ti_OC_12GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080ti',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3080Ti_FTW3_ULTRA_GAMING_12GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3080Ti_MASTER_12GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_EAGLE_12GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_EAGLE_OC_12GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_Gaming_OC_12GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080Ti_VISION_OC_12GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3080ti',
      url:
        'https://xtremmedia.com/PNY_GeForce_RTX_3080Ti_XLR8_Gaming_REVEL_Edition_12GB_GDDR6X.html',
    },
    // 3080
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url:
        'https://xtremmedia.com/Asus_GeForce_ROG_Strix_White_RTX_3080_10GB_GDRR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3080',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Asus_ROG_Strix_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3080',
      url:
        'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3080_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Asus_TUF_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3080',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3080_FTW3_Ultra_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3080_XC3_Black_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3080',
      url:
        'https://xtremmedia.com/EVGA_GeForce_RTX_3080_XC3_Ultra_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_Aorus_GeForce_RTX_3080_Xtreme_10G_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Eagle_10GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Eagle_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Gaming_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc waterforce wb',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_GAMING_OC_OC_WATERFORCE_WB_10GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_MASTER_10GB_DDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3080_Vision_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3080_Gaming_X_Trio_10GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'gaming z trio',
      series: '3080',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3080_Gaming_Z_Trio_10GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3080',
      url:
        'https://xtremmedia.com/MSI_GeForce_RTX_3080_SUPRIM_X_10GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3080_Ventus_3X_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'palit',
      model: 'gamerock',
      series: '3080',
      url:
        'https://xtremmedia.com/Palit_GeForce_RTX_3080_GameRock_10GB_GDDR6X.html',
    },
    {
      brand: 'palit',
      model: 'gamerock oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Palit_GeForce_RTX_3080_GameRock_OC_10GB_GDDR6X.html',
    },
    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url:
        'https://xtremmedia.com/Palit_GeForce_RTX_3080_GamingPro_10GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3080',
      url:
        'https://xtremmedia.com/PNY_GeForce_RTX_3080_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_10GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 gaming',
      series: '3080',
      url:
        'https://xtremmedia.com/PNY_GeForce_RTX_3080_EPIC_X_RGB_Triple_Fan_XLR8_Gaming_10GB_GDDR6X_1.html',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3080_AMP_Holo_10GB_GDDR6X.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3080_Trinity_10GB_GDDR6X.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3080_Trinity_OC_10GB_GDDR6X.html',
    },
    // 3070ti
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Asus_TUF_Gaming_GeForce_RTX_3070_Ti_OC_8GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Gigabyte_AORUS_GeForce_RTX_3070Ti_MASTER_8GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_EAGLE_8GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_EAGLE_OC_8GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_Gaming_OC_8GB_GDDR6X.html',
    },
    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Gigabyte_GeForce_RTX_3070Ti_VISION_OC_8GB_GDDR6X.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Msi_GeForce_RTX_3070Ti_Suprim_X_8GB_GDDR6X.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 revel',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Pny_GeForce_3070Ti_XLR8_Gaming_REVEL_8GB_GDDR6X.html',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3070Ti_AMP_Holo_8GB_GDDR6X.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3070ti',
      url:
        'https://xtremmedia.com/Zotac_GeForce_RTX_3070Ti_Trinity_8GB_GDDR6X.html',
    },
  ],
  name: 'xtremmedia',
};