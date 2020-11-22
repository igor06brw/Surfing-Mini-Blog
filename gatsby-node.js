exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `DatoCmsSurfingschema`) {
      const fileNode = getNode(node.parent)
      console.log(`\n`, node.internal.type)
    }
  }


















