(function() {
  const expect = chai.expect;

  describe('dash-accordion', function() {
    before(dashElements.before());
    after(dashElements.after());
    beforeEach(function() {
      this.container.innerHTML = `
      <dash-accordion>
        <dash-accordion-heading role="heading" id="lol">
          Tab 1
        </dash-accordion-heading>
        <dash-accordion-panel role="region">
          Content 1
        </dash-accordion-panel>
        <dash-accordion-heading role="heading">
          Tab 2
        </dash-accordion-heading>
        <dash-accordion-panel role="region">
          Content 2
        </dash-accordion-panel>
        <dash-accordion-heading role="heading">
          Tab 3
        </dash-accordion-heading>
        <dash-accordion-panel role="region">
          Content 3
        </dash-accordion-panel>
      </dash-accordion>>
      `;
      return Promise.all([
        dashElements.waitForElement('dash-accordion'),
        dashElements.waitForElement('dash-accordion-heading'),
        dashElements.waitForElement('dash-accordion-panel'),
      ]).then(_ => {
        this.accordion = this.container.querySelector('dash-accordion');
        this.headings =
          Array.from(this.container.querySelectorAll('dash-accordion-heading'));
        this.panels =
          Array.from(this.container.querySelectorAll('dash-accordion-panel'));
      });
    });

    it('should know about all the headings', function() {
      expect(
        this.accordion._allHeadings()
      ).to.have.length(
        this.container.querySelectorAll('dash-accordion-heading').length
      );
    });

    it('should’t overwrite existing IDs with generated ones', function() {
      expect(this.headings[0].id).to.equal('lol');
    });

    it('should know about all the panels', function() {
      expect(
        this.accordion._allPanels()
      ).to.have.length(
        this.container.querySelectorAll('dash-accordion-panel').length
      );
    });

    it('should add `aria-labelledby` to panels', function() {
      this.panels.forEach(panel => {
        expect(panel.getAttribute('aria-labelledby')).to.have.length.above(0);
      });
    });

    it('should ensure IDs to all headings', function() {
      this.headings.forEach(heading => {
        expect(heading.id).to.have.length.above(0);
      });
    });

    it('should add `role` to panels', function() {
      this.panels.forEach(panel => {
        expect(panel.getAttribute('role')).to.equal('region');
      });
    });

    it('should expand on setting `expanded`', function() {
      this.headings[0].expanded = true;
      expect(this.headings[0].getAttribute('aria-expanded')).to.equal('true');
      expect(this.panels[0].classList.contains('expanded'));
    });
  });
})();
