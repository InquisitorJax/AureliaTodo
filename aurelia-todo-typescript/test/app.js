/**
 * Created by malcolmj on 6/13/2016.
 */
import { expect } from 'chai';
import { App } from '../app';

describe('App', () => {
    it('should exclaim!', () => {
    let app = new App();
    app.exclaim();
    app.exclaim();
    expect(app.message).to.equal('Oh hai!!');
});
});