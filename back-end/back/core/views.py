from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializers, ContactSimpleSerializers
from rest_framework.response import Response
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    #Exibir na tela do angular somente o id e o nome
    def list(self, request, *args, **kwargs):
        queryset = Contact.objects.all()
        serializer = ContactSimpleSerializers(queryset, many=True)
        return Response(serializer.data)