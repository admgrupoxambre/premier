# Licenca: `cabelo_short02_masculino.glb`

**Cabelo, ajustado ao corpo masculino.** Arquivo: `public/modelos/corpo/makehuman/cabelo_short02_masculino.glb` (275340 bytes, 3344 triangulos).

## Licenca

**CC0 1.0 Universal (dominio publico)**: https://creativecommons.org/publicdomain/zero/1.0/

Sem atribuicao obrigatoria. Uso comercial, modificacao e redistribuicao permitidos. O campo `asset.copyright` do GLB registra a origem.

## Origem

| Parte | Asset MakeHuman de origem |
|---|---|
| cabelo | hair/short02 (makehuman_system_assets) |
| esqueleto | rig 'game_engine' do MPFB (somente ossos/pesos, para skinning) |

- Pack: `makehuman_system_assets_cc0.zip`, https://files2.makehumancommunity.org/asset_packs/makehuman_system_assets/makehuman_system_assets_cc0.zip (pagina: https://static.makehumancommunity.org/assets/assetpacks/makehuman_system_assets.html). No `packs/makehuman_system_assets.json` do pack, cada asset usado tem `"license": "CC0"` e `"author": "makehuman_system"`. Os arquivos `.mhclo`, `.mhmat` e `.obj` trazem o cabecalho: "This asset was explicitly released as CC0 in september 2020."
- Baixado em 2026-11-26, sha256 `b542127a8e25547c7c29c19f2d1d2adb9a664c80396ecd694095dbc8028a0107`.

## Gerador

- MPFB 2.0.18 (MakeHuman Plugin For Blender), https://github.com/makehumancommunity/mpfb2 (tag v2.0.18, commit d0a32e57a7f915cb2f2b95410e2117648c7bbb7e). **O codigo e GPL-3.0-or-later.** Ele foi usado apenas como ferramenta e nenhum codigo do MPFB e distribuido com este arquivo.
- Blender 4.2.3 LTS (GPL), exportador glTF 2.0 do Blender, @gltf-transform 4.5.1 (MIT) e meshoptimizer 1.3.0 (MIT).
- Citacoes literais da MakeHuman Community:
  - https://static.makehumancommunity.org/about/license.html: "All core assets are shared under Creative Commons, CC0. The effective consequence of this is that you are free to do as you see fit with the asset or derivates of the assets. You do not need to pay anything, include any copyright notices nor give attribution."
  - Mesma pagina: "The source code of MPFB is shared under GPL and the source code of MakeHuman is shared under AGPL."
  - https://static.makehumancommunity.org/makehuman/faq/can_i_sell_models_created_with_makehuman.html: "The exported models end up being licensed CC0 (Creative Commons Zero)."

## Modificacoes

- Asset ajustado (fit do MPFB via .mhclo) ao corpo masculino e skinned ao rig `game_engine`, com pesos interpolados do corpo. Material com alpha (cabelo: MASK 0.35; sobrancelha/cilios: BLEND).
- Morph targets gerados a partir de targets e macros MakeHuman: `boca_aberta`, `bochechas_cheias`, `musculo_mais`, `musculo_menos`, `olhos_grandes`, `peso_mais`, `peso_menos`, `rosto_estreito`, `rosto_largo`, `rosto_oval`, `rosto_quadrado`, `rosto_redondo`, `sobrancelhas_erguidas`, `sobrancelhas_franzidas`.
- Texturas redimensionadas para no maximo 1024 px e convertidas para WebP (EXT_texture_webp). Geometria quantizada e comprimida com EXT_meshopt_compression. Morphs em accessors esparsos.
- Validacao: gltf-validator 2.0.0-dev.3.10 com 0 erros e 0 avisos.

Ficha gerada automaticamente em 2026-11-26 por `makehuman/scripts/gerar_licencas.py`.
