class PersonNode {
  constructor(name, parents = [], children = [], partners = []) {
    this.name = name;
    this.parents = parents;
    this.children = children;
    this.partners = partners;
  }
  addChild = childName => {
    this.children = this.children.push(new PersonNode(childName));
  };
  addPartner = partnerName => {
    this.partners = this.partners.push(new PersonNode(partnerName));
  };
}
