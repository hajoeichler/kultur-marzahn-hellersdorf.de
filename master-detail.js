masterDetails = {
  detailQuery: "td[id='selections-detail']",
  level2Query: "td[id='selections-level2']",
  runOnce: function() {
    masterDetails.updateDetail("Ortsteile");
  },
  updateDetail: function(sel) {
    jQuery(masterDetails.detailQuery + " div").remove();
    jQuery(masterDetails.level2Query + " div").remove();
    if (sel === "Ortsteile") {
      masterDetails.createLinkToLevel2("Biesdorf");
      masterDetails.createLinkToLevel2("Hellersdorf");
      masterDetails.createLinkToLevel2("Kaulsdorf");
      masterDetails.createLinkToLevel2("Mahlsdorf");
      masterDetails.createLinkToLevel2("Marzahn");
    }
    if (sel === "Personen") {
      masterDetails.createLinkToPage("Arndt Bause", "123");
    }
    if (sel === "Ereignisse") {
      masterDetails.createLinkToLevel2("Siedlungsgeschichte");
      masterDetails.createLinkToLevel2("Erster Weltkrieg");
      masterDetails.createLinkToLevel2("Zweiter Weltkrieg");
      masterDetails.createLinkToLevel2("Verfolgung im Nationalsozialismus");
      masterDetails.createLinkToLevel2("Großsiedlungsbau");
    }
    if (sel === "NichtMehrVorOrt") {
      masterDetails.createLinkToPage("Bismark Denkmal", "123");
    }
  },
  updateLevel2: function(sel) {
    jQuery(masterDetails.level2Query + " div").remove();
    if (sel === "Biesdorf") {
      masterDetails.createLinkToPageFromLevel2("Foo", "123");
      masterDetails.createLinkToPageFromLevel2("Bar", "123");
    }
    if (sel === "Hellersdorf") {
    }
    if (sel === "Kaulsdorf") {
    }
    if (sel === "Mahlsdorf") {
    }
    if (sel === "Marzahn") {
    }
    if (sel === "Siedlungsgeschichte") {
    }
    if (sel === "Erster Weltkrieg") {
    }
    if (sel === "Zweiter Weltkrieg") {
    }
    if (sel === "Verfolgung im Nationalsozialismus") {
    }
    if (sel === "Großsiedlungsbau") {
    }
  },
  createLinkToLevel2: function(name, id) {
    if (id === undefined) {
      id = name
    }
    masterDetails.createLink(name, id, "updateLevel2", masterDetails.detailQuery); 
  },
  createLinkToPage: function(name, id) {
    masterDetails.createLink(name, id, "openPageWithId", masterDetails.detailQuery);
  },
  createLinkToPageFromLevel2: function(name, id) {
    masterDetails.createLink(name, id, "openPageWithId", masterDetails.level2Query);
  },
  createLink: function(name, id, mdFunction, baseQuery) {
    var div = document.createElement('div');
    var ahref = document.createElement('a');
    ahref.textContent = name;
    div.appendChild(ahref);
    ahref.href = 'javascript:masterDetails.' + mdFunction + '("' + id +'");';
    jQuery(baseQuery).append(div);
  },
  openPageWithId: function(pageId) {
    if (pageId !== '') {
      window.location="/index.php?id=" + pageId
    }
  }
}
