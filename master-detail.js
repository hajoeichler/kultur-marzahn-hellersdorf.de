masterDetails = {
  baseQuery: "td[id='selections-detail']",
  runOnce: function() {
    masterDetails.updateDetail("Numbers");
  },
  updateDetail: function(sel) {
    jQuery(masterDetails.baseQuery + " div").remove();
    if (sel === "Numbers") {
      masterDetails.createElement("1", "1");
      masterDetails.createElement("2", "2");
      masterDetails.createElement("3", "3");
    }
    if (sel === "Chars") {
      masterDetails.createElement("A", "4");
      masterDetails.createElement("B", "5");
    }
  },
  createElement: function(name, id) {
    var div = document.createElement('div');
    var ahref = document.createElement('a');
    ahref.textContent = name;
    ahref.href = 'javascript:masterDetails.openPageWithId("' + id +'");';
    div.appendChild(ahref);
    jQuery(masterDetails.baseQuery).append(div);
  },
  openPageWithId: function(pageId) {
    if (pageId !== '') {
      window.location="/index.php?id=" + pageId
    }
  }
}
