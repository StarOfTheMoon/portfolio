from modeltranslation.translator import translator, TranslationOptions
from .models import Project, Tag

class TagTranslationOptions(TranslationOptions):
    fields = ('name',)
translator.register(Tag, TagTranslationOptions)

class ProjectTranslationOptions(TranslationOptions):
    fields = ('title','subtitle','description',)
translator.register(Project, ProjectTranslationOptions)
