masterDetails = {
  masterQuery: "td[id='selections-master']",
  detailQuery: "td[id='selections-detail']",
  level2Query: "td[id='selections-level2']",
  runOnce: function() {
    masterDetails.createMaster();
    masterDetails.updateDetail("Ortsteile");
  },
  createMaster: function() {
    for ( property in masterDetailsData.root ) {
      if ( masterDetailsData.root.hasOwnProperty(property) ) {
        masterDetails.createMasterLink(property);
      }
    }
  },
  updateDetail: function(sel) {
    jQuery(masterDetails.detailQuery + " div").remove();
    jQuery(masterDetails.level2Query + " div").remove();
    for ( property in masterDetailsData.root[sel] ) {
      if ( masterDetailsData.root[sel].hasOwnProperty(property) ) {
        if ( typeof(masterDetailsData.root[sel][property]) === 'string' ) {
          masterDetails.createLinkToPage(property, masterDetailsData.root[sel][property]);
        } else {
          masterDetails.createLinkToLevel2(property, sel);
        }
      }
    }
  },
  updateLevel2: function(sel, selLevel2) {
    jQuery(masterDetails.level2Query + " div").remove();
    for ( property in masterDetailsData.root[sel][selLevel2] ) {
      if ( masterDetailsData.root[sel][selLevel2].hasOwnProperty(property) ) {
        masterDetails.createLinkToPageLevel2(property, masterDetailsData.root[sel][selLevel2][property]);
      }
    }
  },
  createMasterLink: function(property) {
    masterDetails.createLink(property, property, "updateDetail", masterDetails.masterQuery);
  },
  createLinkToLevel2: function(name, sel) {
    masterDetails.createLink(name, sel + "', '" + name, "updateLevel2", masterDetails.detailQuery);
  },
  createLinkToPage: function(name, id) {
    masterDetails.createLink(name, id, "openPageWithId", masterDetails.detailQuery);
  },
  createLinkToPageLevel2: function(name, id) {
    masterDetails.createLink(name, id, "openPageWithId", masterDetails.level2Query);
  },
  createLink: function(name, id, mdFunction, baseQuery) {
    jQuery(baseQuery).append('<div><a href="javascript:masterDetails.'+mdFunction+'(\''+id+'\');">'+name+'</a></div>');
  },
  openPageWithId: function(pageId) {
    if (pageId !== '') {
      window.location="/index.php?id=" + pageId
    }
  }
}
