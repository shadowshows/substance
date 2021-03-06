import DocumentNode from './DocumentNode'
import AnnotationMixin from './AnnotationMixin'

/**
  A property annotation can be used to overlay text and give it a special meaning.
  PropertyAnnotations only work on text properties. If you want to annotate multiple
  nodes you have to use a {@link model/ContainerAnnotation}.

  @prop {String[]} path Identifies a text property in the document (e.g. `['text_1', 'content']`)
  @prop {Number} startOffset the character where the annoation starts
  @prop {Number} endOffset: the character where the annoation starts

  @example

  Here's how a **strong** annotation is created. In Substance annotations are stored
  separately from the text. Annotations are just regular nodes in the document.
  They refer to a certain range (`startOffset, endOffset`) in a text property (`path`).

  ```js
  doc.transaction(function(tx) {
    tx.create({
      id: 's1',
      type: 'strong',
      start: {
        path: ['p1', 'content'],
        offset: 10
      },
      end: {
        offset
      }
      path: ['p1', 'content'],
      "startOffset": 10,
      "endOffset": 19
    })
  })
  ```
*/
class PropertyAnnotation extends AnnotationMixin(DocumentNode) {}

PropertyAnnotation.prototype._isAnnotation = true
PropertyAnnotation.prototype._isPropertyAnnotation = true

PropertyAnnotation.isPropertyAnnotation = true
PropertyAnnotation.autoExpandRight = true

PropertyAnnotation.schema = {
  type: '@annotation',
  // this is only used when an annotation is used 'stand-alone'
  // i.e. not attached to a property
  _content: { type: 'string', optional: true }
}

export default PropertyAnnotation
