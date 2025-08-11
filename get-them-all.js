const $$ = (s) => [...document.querySelectorAll(s)]

export const getArchitects = () => [$$('a'), $$('span')]
export const getClassical = () => [ $$('a.classical'), $$('a:not(.classical)'),]
export const getActive = () => [ $$('a.classical.active'), $$('a.classical:not(.active)'), ]
export const getBonannoPisano = () => [ document.querySelector('#BonannoPisano'), $$('a.classical.active'),]