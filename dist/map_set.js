"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//MAP retorna todos seus valores e suas chaves
var meuMap = new Map();
meuMap.set("nome", "maicon");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

//recuperação de item, GET retorno do valor, retorno de uma determinada chave.
var nome = meuMap.get("nome");
console.log(nome);

//Recuperar a quantidade de item de um map. Utilizamos o atributo size
console.log(meuMap.size);

//consultar se uma chave existe dentro de um método "quadrado roxo = método/função, retangulo azul = propriedade atributo.
console.log(meuMap.has("sobrenome"));

//função para fazer a limpeza do map todos os item de dentro
//meuMap.clear()
console.log(meuMap.size);

//fazer um for, buscar todas as chaves que vc tem no seu map = dois "nome e stack".
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  //para buscar os valores substituir keys por values = "html, css, js"
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  //criar entradas
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
  }

  //criar entradas sumultanêas, desestruturação troca chaves por um array, colocar a template string exemplo: `${chave}`
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
  }

  //Finalizar a parte de MAP, como remover um item dentro de map
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap.delete("stack");
console.log(meuMap);

//SET
//É mais rigido e nao a estrutura chave e valor. Valores não podem se repetir, um numero não pode começar com um 0 a esquerda
//neste caso ele deve ser declarado como uma string, no set chaves e valores são iguais pois ele é uma coleção de valores únicos sem pares de chave-valor.
var cpfs = new Set();
cpfs.add(14720814042);
cpfs.add(73466455022);
cpfs.add('01954579004');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

//forEach
// O método forEach é utilizado para executar uma função específica para cada elemento do Set.
// No caso do Set, a função é chamada uma vez para cada valor presente no conjunto.
// A função passada para o forEach recebe três argumentos:
cpfs.forEach(function (valor) {
  console.log(valor);
});

//Set como não recebe valores duplicados podemos sem criar um for, adicionar apenas os valores únicos
var array = ['Maicon', 'Luan', 'Maria', 'Benedita', 'Luan', 'Maria'];
var arrayComoSet = new Set([].concat(array));
var arraySemItensDuplicados = _toConsumableArray(arrayComoSet); //Como converter um SET em um ARRAY
console.log(arrayComoSet);
console.log(arraySemItensDuplicados);

//Para destinguir um array de um set na apresentação de valores
// array []
// set {}