# Licenças e procedência dos assets

Um arquivo `.md` por asset, com o **mesmo id do item** no catálogo (`public/catalogo/catalogo.json`),
por exemplo `public/licencas/court-low.md`. O script `node scripts/validar-assets.mjs` recusa itens com
`arquivo3d` que não tenham este arquivo ou cuja `licenca.uso_comercial` não seja `true`.

Peças sem `arquivo3d` são **provisórias** (geometria gerada em código pelo próprio projeto) e não precisam de arquivo aqui.

## Modelo

```markdown
# <id do item> — <nome>

- Arquivo: public/modelos/<categoria>/<arquivo>.glb
- Origem: <link do Sketchfab / Meshy / Tripo3D / feito pela equipe>
- Autor: <nome / perfil>
- Licença: <CC0 | CC-BY 4.0 | Standard Sketchfab | própria ...>  (link do texto da licença)
- Uso comercial permitido: sim/não  (precisa ser "sim")
- Atribuição exigida: <texto exato, se houver>
- Imagens de referência usadas (image-to-3D): <fotos próprias/autorizadas — nunca fotos de terceiros>
- Alterações feitas: <escala, origem, materiais renomeados, logos removidos...>
- Marca/trade dress: confirmado que NÃO há logotipo nem desenho reconhecível de marca: sim
- Conferido por / data:
```
