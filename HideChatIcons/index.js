(function (e, a, i, c, s) {
  "use strict";
  const u = a.findByName("ChatInput");
  let n;
  var d = {
    onLoad() {
      const f = ["ic_gift_24px", "ic_gift", "AppsIcon"].map(function (r) {
        return c.getAssetIDByName(r);
      });
      n = i.after("render", u.prototype, function (r, p) {
        const o = s.findInReactTree(p, function (t) {
          return "forceAnimateButtons" in t.props && t.props.actions;
        });
        o.props.actions = o.props.actions.filter(function (t) {
          return !f.includes(t.source);
        });
      });
    },
    onUnload: n,
  };
  return (
    (e.default = d), Object.defineProperty(e, "__esModule", { value: !0 }), e
  );
})({}, vendetta.metro, vendetta.patcher, vendetta.ui.assets, vendetta.utils);
