import React from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { TypoMain } from '../components/atoms';
import Nutrition from '../components/nutrition/Nutrition';

const Detail = () => {
  const desc =
    'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for. This recipe makes 2 servings with <b>636 calories</b>, <b>21g of protein</b>, and <b>20g of fat</b> each. For <b>$1.83 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is liked by 209 foodies and cooks. If you have pasta, salt and pepper, cheese, and a few other ingredients on hand, you can make it. To use up the extra virgin olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/peach-crisp-healthy-crisp-for-breakfast-487698">Peach Crisp: Healthy Crisp for Breakfast</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, <a href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a> for similar recipes.';
  return (
    <Row
      style={{
        marginTop: '100px',
      }}>
      <Col>
        <Stack className="d-flex p-5 align-items-center  flex-row flex-wrap gap-5">
          <div>
            <img
              src="https://spoonacular.com/recipeImages/716426-556x370.jpg"
              alt="food"
              className="img-fluid rounded bg-none"
            />
          </div>
          <div
            className="d-flex flex-column"
            style={{
              maxWidth: '500px',
            }}>
            <p
              style={{
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '30px',
                color: '#000',
              }}>
              Nasi Goreng
            </p>
            <div dangerouslySetInnerHTML={{ __html: desc }}></div>
          </div>
        </Stack>
        <Stack className="d-flex flex-row flex-wrap align-items-center p-5 gap-5">
          <Stack className=" gap-4">
            <Nutrition
              icon={'/icons/fire-cal.svg'}
              name={'Kalori'}
              value={'900Kkal'}
            />
            <Nutrition
              icon={'/icons/cloud-meatball.svg'}
              name={'Fat'}
              value={'5g'}
            />
            <Nutrition
              icon={'/icons/wheat-awn.svg'}
              name={'Carbohydrates'}
              value={'70g'}
            />
            <Nutrition
              icon={'/icons/dna.svg'}
              name={'Protein'}
              value={'23g'}
            />
          </Stack>
          <Stack className="d-flex justify-content-center align-items-center">
            <div className="carbon-card">
              <div className="carbon-circle">
                <div className="box-carbon">200c02</div>
              </div>
              <Button className="button button-main">Save</Button>
            </div>
          </Stack>
        </Stack>
      </Col>
    </Row>
  );
};

export default Detail;
