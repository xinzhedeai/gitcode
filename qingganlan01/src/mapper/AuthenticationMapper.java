package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.Authentication;
import po.AuthenticationExample;

public interface AuthenticationMapper {
    int countByExample(AuthenticationExample example);

    int deleteByExample(AuthenticationExample example);

    int deleteByPrimaryKey(@Param("id") String id, @Param("usId") String usId);

    int insert(Authentication record);

    int insertSelective(Authentication record);

    List<Authentication> selectByExample(AuthenticationExample example);

    Authentication selectByPrimaryKey(@Param("id") String id, @Param("usId") String usId);

    int updateByExampleSelective(@Param("record") Authentication record, @Param("example") AuthenticationExample example);

    int updateByExample(@Param("record") Authentication record, @Param("example") AuthenticationExample example);

    int updateByPrimaryKeySelective(Authentication record);

    int updateByPrimaryKey(Authentication record);
}