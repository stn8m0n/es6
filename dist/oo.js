"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _hp = /*#__PURE__*/new WeakMap();
//Funções contrutoras Orientação a Objeto antigamente. Esta é uma função construtora
// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     thistipo = tipo;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico") //Pikachu instacia de 1 pokemon
//EcmaSCript6 podemos criar uma classe e não 1 construtor
//Não é mais uma função e passa a ser um objeto.
//Para transformar um atributo em privado # ele só é acessado dentro da sua classe.
var Pokemon = /*#__PURE__*/function () {
  // nome = '';
  // tipo = '';
  //quanto utilizado construtores não precisa inicializar com vazio, isso ocorre quando foi instaciado o objeto.
  function Pokemon(nomeDoPokemon, tipoDoPokemon) {
    _classCallCheck(this, Pokemon);
    _classPrivateFieldInitSpec(this, _hp, 100);
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
  }
  return _createClass(Pokemon, [{
    key: "atacar",
    value: function atacar(nomedoAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomedoAtaque));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
    }
    //criar um método que só ele irá acessar pokemon
  }, {
    key: "exibeHp",
    value: function exibeHp() {
      console.log(_classPrivateFieldGet(_hp, this));
    }
  }]);
}(); //Neste exemplo de pikachu nós fizemos a herança e o polimorfismo. Vamos criar um novo atributo na classe mãe
var Pikachu = /*#__PURE__*/function (_Pokemon2) {
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _callSuper(this, Pikachu, ['Pikachu', 'Elétrico']);
  }
  _inherits(Pikachu, _Pokemon2);
  return _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com choque do trov\xE3o"));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      this.hp -= 10;
    }
  }]);
}(Pokemon);
var pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000; //essa função agora depois de ternar o hp privado, está criando e atribuindo um novo hp.

console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();
var pikachu = new Pokemon('pikachu', 'elétrico');
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';

console.log(pikachu);
console.log(pikachuDoAsh);
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);