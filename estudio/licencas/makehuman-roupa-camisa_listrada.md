# Licenca: roupa `camisa_listrada`

**Camisa listrada manga longa.** Categoria: superior.

| Arquivo | Bytes | Triangulos | Validacao (gltf-validator) |
|---|---|---|---|
| `public/modelos/roupas/makehuman/camisa_listrada_feminino.glb` | 397720 | 3088 | 0 erros, 1 avisos |
| `public/modelos/roupas/makehuman/camisa_listrada_masculino.glb` | 393208 | 3088 | 0 erros, 1 avisos |

## Licenca

**CC0 1.0 Universal (dominio publico)**: https://creativecommons.org/publicdomain/zero/1.0/

Sem atribuicao obrigatoria. Uso comercial, modificacao e redistribuicao permitidos.

## Origem

- Asset MakeHuman: `clothes/male_casualsuit03` (`.mhclo`, `.obj`, `.mhmat` e texturas) do pack `makehuman_system_assets_cc0.zip`.
- Download: https://files2.makehumancommunity.org/asset_packs/makehuman_system_assets/makehuman_system_assets_cc0.zip (pagina: https://static.makehumancommunity.org/assets/assetpacks/makehuman_system_assets.html). Baixado em 2026-11-26, sha256 `b542127a8e25547c7c29c19f2d1d2adb9a664c80396ecd694095dbc8028a0107`.
- No `packs/makehuman_system_assets.json` o asset tem `"license": "CC0"` e `"author": "makehuman_system"`. O `.mhclo` traz o cabecalho "This asset was explicitly released as CC0 in september 2020." O script checa "CC0" no `.mhclo` antes de usar a peca.
- Citacoes literais da MakeHuman Community:
  - https://static.makehumancommunity.org/about/license.html: "All core assets are shared under Creative Commons, CC0. The effective consequence of this is that you are free to do as you see fit with the asset or derivates of the assets. You do not need to pay anything, include any copyright notices nor give attribution."
  - https://static.makehumancommunity.org/makehuman/faq/can_i_sell_models_created_with_makehuman.html: "The exported models end up being licensed CC0 (Creative Commons Zero)."
- Gerador: MPFB 2.0.18 (codigo GPL-3.0-or-later, usado so como ferramenta; nenhum codigo e distribuido), Blender 4.2.3 LTS, @gltf-transform 4.5.1 e meshoptimizer 1.3.0.

## Modificacoes

- O asset original e um conjunto (parte de cima + parte de baixo numa malha so). Esta peca e a parte "superior", separada pelas partes soltas da malha.
- Ajustada (fit .mhclo do MPFB) ao corpo masculino e ao feminino. Skinned ao rig `game_engine` de 53 ossos, com pesos interpolados do corpo.
- Folga minima de 4 mm entre peca e pele (12 mm na barra de pecas de cima na cintura; cos das pecas de baixo justo, 5 mm), para a pele nao atravessar o tecido.
- Morph targets de corpo propagados (refit por morph): `barriga`, `cintura_fina`, `musculo_mais`, `musculo_menos`, `ombros_largos`, `peso_mais`, `peso_menos`, `quadril_largo`, `seios_mais`, `seios_menos`.
- Mascara de pele: o `delete_verts` do .mhclo, dividido entre as partes e acrescido dos vertices que atravessavam o tecido, alem dos triangulos de cada LOD do corpo que atravessam a peca (`roupas.json`).
- Textura original, sem variantes de cor.
- Simplificacao meshoptimizer so de indices quando passa de 8k tris. Texturas WebP de no maximo 1024 px. Compressao EXT_meshopt_compression com quantizacao.

Ficha gerada automaticamente em 2026-11-26 por `makehuman/scripts/gerar_licencas_roupas.py`.
