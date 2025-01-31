import {Store} from './store';

export const BAndH: Store = {
  backoffStatusCodes: [403, 429],
  currency: '$',
  labels: {
    inStock: {
      container: 'div[data-selenium="addToCartSection"]',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[data-selenium="pricingPrice"]',
      euroFormat: false,
    },
    outOfStock: {
      container: 'button[data-selenium="notifyAvailabilityButton"]',
      text: ['notify when available'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.bhphotovideo.com/c/product/1452927-REG/evga_06g_p4_2063_kr_geforce_rtx_2060_xc.html',
    },
    {
      brand: 'asus',
      model: 'dual',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1602755-REG/asus_dualrtx30708g_geforce_rtx_3070_8g.html',
    },
    {
      brand: 'pny',
      model: 'dual fan',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1595984-REG/pny_technologies_vcg30708tfxppb_geforce_rtx_3070_epic_x.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1602756-REG/asus_strixrtx3070o8_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'dual oc',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1603974-REG/asus_dualrtx3070o8g_dual_geforce_rtx_3070.html',
    },
    {
      brand: 'asus',
      model: 'ko oc',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1606745-REG/asus_90yv0fq2_m0aa00_ko_nvidia_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1606746-REG/asus_tuf_rtx3070_o8g_gaming_tuf_gaming_nvidia_geforce.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1614305-REG/asus_rtx3070_8g_ek_ekwb_geforce_rtx_3070.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3070',
      url: 'https://www.bhphotovideo.com/c/product/1614300-REG/asus_rog_strix_rtx3070_o8g_white_rog_strix_geforce_rtx.html',
    },
    // TUF was removed from BH, not sure why so commenting out listing for now
    // {
    // 	brand: 'asus',
    // 	model: 'tuf',
    // 	series: '3080',
    // 	url: 'https://www.bhphotovideo.com/c/product/1593649-REG/asus_tuf_rtx3080_10g_gaming_tuf_gaming_geforce_rtx.html'
    // },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1592969-REG/zotac_zt_a30800d_10p_gaming_geforce_rtx_3080.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593650-REG/asus_tuf_rtx3080_o10g_gaming_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1603617-REG/asus_rog_strix_rtx3080_o10g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1614301-REG/asus_rog_strix_rtx3080_o10g_white_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1614303-REG/asus_rtx3080_10g_ek_ekwb_geforce_rtx_3080.html',
    },
    {
      brand: 'asus',
      model: 'ko oc',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1609756-REG/asus_ko_rtx3060ti_o8g_gaming_ko_geforce_rtx_3060.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1607025-REG/asus_tuf_rtx3060ti_o8g_gaming_geforce_rtx_3060_ti.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1606948-REG/gigabyte_gv_n306teagle_oc_8gd_rtx_3060_ti_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1606949-REG/gigabyte_gv_n306teagle_8gd_rtx_3060_ti_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1606945-REG/gigabyte_gv_n306taorus_m_8gd_aorus_rtx_3060_ti.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1606947-REG/gigabyte_gv_n306tgaming_oc_8gd_rtx_3060_ti_gaming.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming pro',
      series: '3060ti',
      url: 'https://www.bhphotovideo.com/c/product/1606946-REG/gigabyte_gv_n306tgamingoc_pro_8gd_rtx_3060_ti_gaming.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593996-REG/msi_g3080gxt10_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593997-REG/msi_g3080v3x10c_geforce_rtx_3080_ventus.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593645-REG/msi_geforce_rtx_3080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url: 'https://www.bhphotovideo.com/c/product/1593646-REG/msi_geforce_rtx_3080_ventus.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1592970-REG/zotac_zt_a30900d_10p_gaming_geforce_rtx_3090.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593647-REG/msi_geforce_rtx_3090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593994-REG/msi_g3090gxt24_geforce_rtx_3090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593648-REG/msi_geforce_rtx_3090_ventus.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593995-REG/msi_g3090v3x24c_geforce_rtx_3090_ventus.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593334-REG/gigabyte_gv_n3090eagle_oc_24gd_geforce_rtx_3090_eagle.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1593335-REG/gigabyte_gv_n3090gaming_oc_24gd_geforce_rtx3090_gaming_oc.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1594454-REG/asus_90yv0fd0_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1594451-REG/asus_90yv0fd1_m0am00_tuf_gaming_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'ekwb',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1607043-REG/asus_rtx3090_24g_ek_geforce_rtx_3090_24g.html',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1601764-REG/asus_rog_strix_rtx3090_o24g_gaming_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'strix white',
      series: '3090',
      url: 'https://www.bhphotovideo.com/c/product/1614302-REG/asus_rog_strix_rtx3090_o24g_white_rog_strix_geforce_rtx.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1730538-REG/zotac_zt_d40900j_10p_geforce_rtx_4090_trinity.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1730540-REG/zotac_zt_d40900d_10p_geforce_rtx_4090_trinity.html',
    },
    {
      brand: 'zotac',
      model: 'amp extreme airo',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1730539-REG/zotac_zt_d40900b_10p_geforce_rtx_4090_amp.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729221-REG/gigabyte_gv_n4090gaming_oc_24gd_geforce_rtx_4090_gaming.html',
    },
    {
      brand: 'gigabyte',
      model: 'windforce',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729222-REG/gigabyte_gv_n4090wf3_24gd_geforce_rtx_4090_windforce.html',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729257-REG/asus_rog_strix_rtx4090_o24g_gaming_geforce_rtx_4090_rog.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1730937-REG/asus_tuf_rtx4090_24g_gaming_geforce_rtx_4090_tuf.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729258-REG/asus_tuf_rtx4090_o24g_gaming_geforce_rtx_4090_tuf.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729349-REG/msi_g4090sx24_geforce_rtx_4090_suprim.html',
    },
    {
      brand: 'msi',
      model: 'suprim liquid x',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729348-REG/msi_g4090slx24_geforce_rtx_4090_suprim.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729347-REG/msi_g4090gxt24_geforce_rtx_4090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729346-REG/msi_g4090gt24_geforce_rtx_4090_gaming.html',
    },
    {
      brand: 'pny',
      model: 'gaming verto epic-x',
      series: '4090',
      url: 'https://www.bhphotovideo.com/c/product/1729096-REG/pny_vcg409024tfxxpb1_geforce_rtx_4090_24gb.html',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.bhphotovideo.com/c/product/1598372-REG/amd_100_100000059wof_ryzen_9_5950x_3_4.html',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.bhphotovideo.com/c/product/1598373-REG/amd_100_100000061wof_ryzen_9_5900x_3_7.html',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.bhphotovideo.com/c/product/1598376-REG/amd_100_100000063wof_ryzen_7_5800x_3_8.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.bhphotovideo.com/c/product/1598377-REG/amd_100_100000065box_ryzen_5_5600x_3_7.html',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.bhphotovideo.com/c/product/1598377-REG/amd_100_100000065box_ryzen_5_5600x_3_7.html',
    },
    {
      brand: 'corsair',
      model: '750 platinum',
      series: 'sf',
      url: 'https://www.bhphotovideo.com/c/product/1560680-REG/corsair_cp_9020186_na_corsair_sf750_power_supply.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 verto epic x',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1729444-REG/pny_vcg408016tfxxpb1_nvidia_geforce_rtx_4080.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1731403-REG/gigabyte_gv_n4080gaming_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1731405-REG/gigabyte_gv_n4080eagle_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'zotac',
      model: 'amp extreme airo',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1732733-REG/zotac_zt_d40810b_10p_geforce_rtx_4080_amp.html',
    },
    {
      brand: 'gigabyte',
      model: 'aero oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1731404-REG/gigabyte_gv_n4080aero_oc_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1732735-REG/zotac_zt_d40810d_10p_geforce_rtx_4080_trinity.html',
    },
    {
      brand: 'gigabyte',
      model: 'eagle',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1731409-REG/gigabyte_gv_n4080eagle_16gd_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'gigabyte',
      model: 'master',
      series: '4080-16g',
      url: '',
    },
    {
      brand: 'asus',
      model: 'strix oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733173-REG/asus_rog_strix_rtx4080_o16g_gaming_geforce_rtx_4080_republic.html',
    },
    {
      brand: 'asus',
      model: 'tuf oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733163-REG/asus_tuf_rtx4080_o16g_gaming_geforce_rtx_4080_tuf.html',
    },
    {
      brand: 'asus',
      model: 'tuf',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733171-REG/asus_tuf_rtx4080_16g_gaming_geforce_rtx_4080_tuf.html',
    },
    {
      brand: 'msi',
      model: 'suprim x',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733724-REG/msi_g408016sx_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733725-REG/msi_g408016gxt_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733740-REG/msi_g408016v3x_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1732734-REG/zotac_zt_d40810j_10p_geforce_rtx_4080_trinity.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1733739-REG/msi_g408016v3xc_geforce_rtx_4080_16gb.html',
    },
    {
      brand: 'pny',
      model: 'xlr8 verto oc',
      series: '4080-16g',
      url: '',
    },
    {
      brand: 'pny',
      model: 'xlr8 verto epic x',
      series: '4080-16g',
      url: 'https://www.bhphotovideo.com/c/product/1729444-REG/pny_vcg408016tfxxpb1_nvidia_geforce_rtx_4080.html',
    },
    {
      brand: 'asus',
      model: 'prime oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1872328-REG/asus_prime_rtx5080_o16g_geforce_rtx_5080_prime.html',
    },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1872329-REG/asus_rog_astral_rtx5080_o16g_gaming_republic_of_gamers_astral.html',
    },
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1872330-REG/asus_tuf_rtx5080_o16g_gaming_geforce_rtx_5080_tuf.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875457-REG/msi_g5080_16gtc_geforce_rtx_5080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio oc white',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875458-REG/msi_g5080_16gtcw_geforce_rtx_5080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'inspire 3x oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875459-REG/msi_g5080_16i3c_geforce_rtx_5080_inspire.html',
    },
    {
      brand: 'asus',
      model: 'prime',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1874876-REG/asus_prime_rtx5080_16g_geforce_rtx_5080_prime.html',
    },
    {
      brand: 'pny',
      model: 'suprim liquid soc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875460-REG/msi_g5080_16sls_geforce_rtx_5080_suprim.html',
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875461-REG/msi_g5080_16sps_geforce_rtx_5080_suprim.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc plus',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875462-REG/msi_g5080_16v3cp_geforce_rtx_5080_ventus.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1872786-REG/gigabyte_gv_n5080gaming_oc_16gd_geforce_rtx_5080_gaming.html',
    },
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875463-REG/msi_g5080_16vgs_geforce_rtx_5080_vanguard.html',
    },
    {
      brand: 'gigabyte',
      model: 'aero oc sff',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875711-REG/gigabyte_gv_n5080aero_oc_16gd_geforce_rtx_5080_aero.html',
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc sff',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875716-REG/gigabyte_gv_n5080wf3oc_16gd_geforce_rtx_5080_windforce.html',
    },
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875464-REG/msi_g5080_16vgsl_geforce_rtx_5080_vanguard.html',
    },
    {
      brand: 'pny',
      model: 'triple fan oc',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1874645-REG/pny_vcg508016tfxpb1_o_nvidia_geforce_rtx_5080.html',
    },
    {
      brand: 'pny',
      model: 'epic x',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1874646-REG/pny_vcg508016tfxxpb1_o_nvidia_geforce_rtx_5080.html',
    },
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875713-REG/gigabyte_gv_n5080aorusm_ice_16gd_geforce_rtx_5080_master.html',
    },
    {
      brand: 'gigabyte',
      model: 'master',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875712-REG/gigabyte_gv_n5080aorus_m_16gd_geforce_rtx_5080_master.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875715-REG/gigabyte_gv_n5080aorusx_wb_16gd_geforce_rtx_5080_aorus.html',
    },
    {
      brand: 'pny',
      model: 'aorus xtreme waterforce',
      series: '5080',
      url: 'https://www.bhphotovideo.com/c/product/1875714-REG/gigabyte_gv_n5080aorusx_w_16gd_geforce_rtx_5080_aorus.html',
    },
    {
      brand: 'msi',
      model: 'gaming trio oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875465-REG/msi_g5090_32gtc_geforce_rtx_5090_gaming.html',
    },
    {
      brand: 'msi',
      model: 'suprim liquid soc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875466-REG/msi_g5090_32sls_geforce_rtx_5090_suprim.html',
    },
    {
      brand: 'pny',
      model: 'triple fan oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1874647-REG/pny_vcg509032tfxpb1_o_nvidia_geforce_rtx_5090.html',
    },
    {
      brand: 'msi',
      model: 'suprim soc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875467-REG/msi_g5090_32sps_geforce_rtx_5090_suprim.html',
    },
    {
      brand: 'asus',
      model: 'tuf gaming oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875902-REG/asus_tuf_rtx5090_o32g_gaming_geforce_rtx_5090_tuf.html',
    },
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce wb',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875720-REG/gigabyte_gv_n5090aorusx_wb_32gd_geforce_rtx_5090_aorus.html',
    },    
    {
      brand: 'gigabyte',
      model: 'aorus xtreme waterforce',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875719-REG/gigabyte_gv_n5090aorusx_w_32gd_geforce_rtx_5080_aorus.html',
    },
    {
      brand: 'asus',
      model: 'astral',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1876781-REG/asus_rog_astral_rtx5090_32g_gaming_rog_astral_gfrce_rtx.html',
    },
    {
      brand: 'asus',
      model: 'astral oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875529-REG/asus_rog_astral_rtx5090_o32g_gaming_geforce_rtx_5090_republic.html',
    },
    {
      brand: 'pny',
      model: 'epic x oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1874648-REG/pny_vcg509032tfxxpb1_o_nvidia_geforce_rtx_5090.html',
    },
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875468-REG/msi_g5090_32v3c_geforce_rtx_5090_ventus.html',
    },
    {
      brand: 'msi',
      model: 'vanguard soc launch edition',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875470-REG/msi_g5090_32vgsl_geforce_rtx_5090_vanguard.html',
    },
    {
      brand: 'msi',
      model: 'vanguard soc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875469-REG/msi_g5090_32vgs_geforce_rtx_5090_vanguard.html',
    },
    {
      brand: 'gigabyte',
      model: 'windforce oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875722-REG/gigabyte_gv_n5090wf3oc_32gd_geforce_rtx_5090_windforce.html',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875721-REG/gigabyte_gv_n5090gaming_oc_32gd_geforce_rtx_5090_gaming.html',
    },
    {
      brand: 'asus',
      model: 'tuf gaming',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875530-REG/asus_tuf_rtx5090_32g_gaming_geforce_rtx_5090_tuf.html',
    },
    {
      brand: 'gigabyte',
      model: 'master ice',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875718-REG/gigabyte_gv_n5090aorusm_ice_32gd_geforce_rtx_5090_master.html',
    },
    {
      brand: 'gigabyte',
      model: 'master',
      series: '5090',
      url: 'https://www.bhphotovideo.com/c/product/1875717-REG/gigabyte_gv_n5090aorus_m_32gd_geforce_rtx_5090_master.html',
    },
  ],
  name: 'bandh',
  country: 'US',
};

/* Copy Paste Template
    {
      brand: 'pny',
      model: '',
      series: '',
      url: '',
    },
*/
